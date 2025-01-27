import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { user } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    console.log(4);
    console.log(user);
    // super.logIn() 호출 시 내부적으로 request에 있는 user를 꺼내 serializeUser()를 호출
    done(null, user.login_email);
    console.log(5);
  }
  async deserializeUser(payload: any, done: (err: Error, user: any) => void) {
    // payload 는 세션에서 꺼내 온 값 ( == serializeUser()의 user.email )
    const user: user = await this.userService.findUserByEmail(
      payload as string,
    );
    if (!user) {
      done(new Error('User not found'), null);
      return;
    }
    const { login_pw, ...userInfoNoPassword } = user;
    done(null, userInfoNoPassword);
  }
}
