import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    // 쿠키가 없으면 인증 실패
    if (!request.cookies['user']) {
      return false;
    }

    const userCookie: UserSignInCookie = await this.authService.parseCookie(
      request.cookies['user'],
    );

    // 쿠키가 유효하면 인증 성공, user_id를 request에 저장
    if (await this.authService.validateUserCookie(userCookie)) {
      request.headers['X-Request-user-id'] = userCookie.id.toString();
      return true;
    }
    return false;
  }
}

// 로그인 시 사용할 가드
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('1');
    const result = (await super.canActivate(context)) as boolean;

    // todo: passport-local의 로직을 구현 한 메소드를 실행
    console.log('3');
    const request = context.switchToHttp().getRequest();
    // 세션 저장
    await super.logIn(request);
    console.log('6');
    return result;
  }
}

// 로그인 후 인증이 되었는지 확인하는 가드
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}
