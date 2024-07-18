import {
  Body,
  ConsoleLogger,
  Controller,
  Get,
  Logger,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ReqRegisterDto } from './dto/res/reqRegister.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  userHome() {
    return {
      path: '/api/v1/user',
    };
  }

  @Post('/register')
  userRegister(@Body() dto: ReqRegisterDto) {
    Logger.log('POST register');
    return this.userService.register(dto);
  }
}
