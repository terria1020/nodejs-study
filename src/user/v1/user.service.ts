import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { ReqRegisterDto } from './dto/req/reqRegister.dto';
import { ResAllUsersDto } from './dto/res/resAllUsers.dto';

@Injectable()
export class UserService {
  async getUser(userId: number) {
    const user = await this.userRepository.findUser(userId);

    return new ResAllUsersDto(user?.user_id, user?.name, user?.email);
  }
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<ResAllUsersDto[]> {
    const users = await this.userRepository.findAll();

    const usersDto: ResAllUsersDto[] = users.map(
      (user) => new ResAllUsersDto(user.user_id, user.name, user.email),
    );

    return usersDto;
  }

  async register(dto: ReqRegisterDto) {
    const users = await this.userRepository.findByName({
      name: dto.name,
    });

    if (users.length >= 1) {
      throw new Error('이미 존재하는 회원입니다.');
    }

    this.userRepository.createUser(dto);
  }
}
