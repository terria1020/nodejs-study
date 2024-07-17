import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  register(dto: RegisterDto) {
    const password: string = Buffer.from(dto.loginPw).toString('base64');

    const user = this.prisma.user.create({
      data: {
        login_email: dto.loginEmail,
        login_pw: password,
      },
    });

    return user;
  }
}
