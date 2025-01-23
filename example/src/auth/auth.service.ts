import {
  HttpException,
  HttpStatus,
  Injectable,
  Req,
  Res,
} from '@nestjs/common';
import { user } from '@prisma/client';
import { compareSync } from 'bcrypt';
import { assert } from 'console';
import { Request, Response } from 'express';
import { LoginReqDto } from 'src/dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async login(dto: LoginReqDto, @Req() req: Request, @Res() res: Response) {
    const user = await this.validateUser(dto.loginEmail, dto.loginPw);

    if (user === null) {
      throw new HttpException('Login Failed', HttpStatus.FORBIDDEN);
    }
    res.cookie('user', this.createLoginCookie(user), {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });
    res.status(200).send('login success');
  }

  async validateUser(email: string, password: string): Promise<user> {
    const user = await this.usersService.findUserByEmail(email);
    if (compareSync(password, user.login_pw)) {
      return user;
    }
    return null;
  }

  async validateUserCookie(cookie: {
    id: number;
    email: string;
  }): Promise<boolean> {
    const user = await this.usersService.findUserByEmail(cookie.email);
    if (user.user_id === cookie.id) {
      return true;
    }
    return false;
  }

  createLoginCookie(user: user) {
    assert(user === null);
    return Buffer.from(
      JSON.stringify({
        id: user.user_id,
        email: user.login_email,
      }),
    ).toString('base64');
  }
}
