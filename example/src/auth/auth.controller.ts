import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReqDto } from 'src/dto/register.dto';
import { Request, Response } from 'express';
import {
  AuthenticatedGuard,
  GoogleGuard,
  JwtAuthGuard,
  LocalAuthGuard,
} from './auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async register(
    @Body() dto: LoginReqDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return await this.authService.login(dto, req, res);
  }

  @UseGuards(GoogleGuard)
  @Get('/oauth2/google')
  async googleLogin() {
    return 'google login';
  }

  @Get('/oauth2/google/callback')
  @UseGuards(GoogleGuard)
  async googleLoginCallback(@Req() req: Request) {
    console.log(req);
    console.log(req.body);
    return 'success';
    // return await this.authService.googleLoginCallback(req);
  }
}

@Controller('api/v2/auth')
export class AuthV2Controller {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async register(@Body() dto: LoginReqDto, @Req() req: Request) {
    return await this.authService.loginWithGuard(dto, req);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/me')
  async me(@Session() session: Record<string, any>) {
    return {
      jwt: this.authService.createLoginJwt({
        user_id: null,
        login_email: session.passport.user.login_email,
        login_pw: null,
      }),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/my')
  async my() {
    return 'my';
  }
}
