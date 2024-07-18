import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { contains } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/user.repository';
import { ReqRegisterDto } from './dto/res/reqRegister.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(dto: ReqRegisterDto) {
    const users = this.userRepository.findByName({
      name: dto.name,
    });

    if ((await users).length >= 1) {
      throw new Error('이미 존재하는 회원입니다.');
    }

    this.userRepository.createUser(dto);
  }
}
