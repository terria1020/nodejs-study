import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReqDto } from 'src/dto/register.dto';
import { Request, Response } from 'express';

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
}
