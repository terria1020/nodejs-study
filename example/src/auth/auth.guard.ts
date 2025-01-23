import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    // 쿠키가 없으면 인증 실패
    if (!request.cookies['user']) {
      return false;
    }

    let userCookie = request.cookies['user'];
    userCookie = Buffer.from(userCookie, 'base64').toString();
    userCookie = JSON.parse(userCookie);

    // 쿠키가 유효하면 인증 성공, user_id를 request에 저장
    if (this.authService.validateUserCookie(userCookie)) {
      request.user_id = userCookie.id;
      console.log(request);
      // request.headers['X-Request-user-id'] = userCookie.user_id;

      console.log(`request.headers: ${JSON.stringify(request.headers)}`);
      return true;
    }
    return false;
  }
}
