import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserSignupReqDto } from './dto/users.signup.dto';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.get.dto';
import { UsersUpdateDto } from './dto/users.update.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signup(@Body() requestDto: UserSignupReqDto): Promise<string> {
    return this.usersService.signup(requestDto);
  }

  @UseGuards(AuthGuard)
  @Get('/find-by-email')
  async findByEmail(
    @Query('email') email: string,
    @Req() req: Request,
  ): Promise<UsersDto> {
    return this.usersService.findUserDto(req, email);
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
