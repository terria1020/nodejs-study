import { HttpException, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { LoginReqDto } from 'src/dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from 'src/users/dto/users.get.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async login(dto: LoginReqDto) {
    const user = await this.usersService.findUserByEmail(dto.loginEmail);
    if (compareSync(dto.loginPw, user.login_pw)) {
      return 'Login success';
    } else {
      throw new HttpException('Login failed', 403);
    }
  }
}
