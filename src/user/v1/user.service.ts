import {
  Body,
  Controller,
  Get,
  Injectable,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { contains } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/user.repository';
import { ReqRegisterDto } from './dto/req/reqRegister.dto';
import { ResAllUsersDto } from './dto/res/resAllUsers.dto';

@Injectable()
export class UserService {
  async getUser(userId: number) {
    return await this.userRepository.findUser(userId);
  }
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<ResAllUsersDto[]> {
    return await this.userRepository.findAll();
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
@Controller({
  path: 'api/v1/users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getAll() {
    return this.userService.getAll();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: number) {
    return this.userService.getUser(userId);
  }

  @Post('/register')
  userRegister(@Body() dto: ReqRegisterDto) {
    Logger.log('POST register');
    return this.userService.register(dto);
  }
}
