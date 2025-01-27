import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { user } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // <- PassportStrategy를 상속받아 LocalStrategy 클래스를 만듦 (믹스인 방법)
  // 믹스인이란: 클래스에 다른 클래스의 기능을 추가하는 방법
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'loginEmail',
      passwordField: 'loginPw',
    });
  }

  // passport-local의 validate 메소드를 구현
  // request의 유저 정보를 받아서 유효성 검사를 한 후 유저 정보를 반환
  async validate(loginEmail: string, loginPw: string): Promise<any> {
    console.log(2);
    const user: user = await this.authService.validateUser(loginEmail, loginPw);
    if (!user) {
      return null;
    }
    return user;
  }
}
