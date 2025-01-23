import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserSignupReqDto } from './dto/users.signup.dto';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.get.dto';
import { UsersUpdateDto } from './dto/users.update.dto';
import { IsString } from 'class-validator';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signup(@Body() requestDto: UserSignupReqDto): Promise<string> {
    return this.usersService.signup(requestDto);
  }

  @Get('/find-by-email')
  async findByEmail(@Query('email') email: string): Promise<UsersDto> {
    return this.usersService.findUserByEmail(email);
  }

  @Put('/accounts/:email')
  async updateAll(
    @Param('email') email: string,
    @Body() dto: UsersUpdateDto,
  ): Promise<UsersDto> {
    return this.usersService.updateUser(email, dto);
  }

  @Delete('/accounts/:email')
  async delete(@Param('email') email: string): Promise<string> {
    return this.usersService.deleteUserAccount(email);
  }
}
