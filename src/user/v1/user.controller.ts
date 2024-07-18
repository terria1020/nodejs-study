import { Controller, Get } from '@nestjs/common';

@Controller('api/v1')
export class UserController {
  @Get('user')
  userHome() {
    return {
      path: '/api/v1/user',
    };
  }
}
