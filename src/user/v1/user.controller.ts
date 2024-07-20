import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ReqRegisterDto } from './dto/req/reqRegister.dto';
import { UserService } from './user.service';

@Controller({
  path: 'api/v1/users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getAll() {
    return this.userService.getAll();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: number) {
    return this.userService.getUser(userId);
  }

  @Post('/register')
  userRegister(@Body() dto: ReqRegisterDto) {
    Logger.log('POST register');
    return this.userService.register(dto);
  }
}
