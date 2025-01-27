import { HttpException, Injectable, Logger } from '@nestjs/common';
import { UserSignupReqDto } from './dto/users.signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.get.dto';
import { UsersUpdateDto } from './dto/users.update.dto';
import { hashSync } from 'bcrypt';
import { Request } from 'express';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly prisma: PrismaService) {}

  async signup(requestDto: UserSignupReqDto): Promise<string> {
    const password = this.createEncryptPassword(requestDto.loginPw);

    try {
      const [user] = await this.prisma.$transaction([
        this.prisma.user.create({
          data: {
            login_email: requestDto.loginEmail,
            login_pw: password,
          },
        }),
      ]);
      return user.login_email;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('User already exists', 400);
    }
  }

  async findUserByEmail(email: string): Promise<any> {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          login_email: email,
        },
      });
      return user;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('User not found', 404);
    }
  }

  async findUserDto(req: Request, email: string): Promise<UsersDto> {
    console.log(
      `service req headers userId: ${req.headers['X-Request-user-id']}`,
    );
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return {
      id: user.user_id,
      loginEmail: user.login_email,
    };
  }

  async updateUser(
    email: string,
    usersUpdateDto: UsersUpdateDto,
  ): Promise<UsersDto> {
    if (!email) {
      throw new HttpException('Email is required', 400);
    }

    try {
      const [user] = await this.prisma.$transaction([
        this.prisma.user.update({
          where: {
            login_email: email,
          },
          data: {
            login_email: usersUpdateDto.loginEmail,
          },
        }),
      ]);
      return {
        id: user.user_id,
        loginEmail: user.login_email,
      };
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('User not found', 404);
    }
  }
  async deleteUserAccount(email: string): Promise<string> {
    if (!email) {
      throw new HttpException('Email is required', 400);
    }
    try {
      await this.prisma.user.delete({
        where: {
          login_email: email,
        },
      });
      return 'success';
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('User not found', 404);
    }
  }

  createEncryptPassword(password: string) {
    return hashSync(password, 10);
  }
}
