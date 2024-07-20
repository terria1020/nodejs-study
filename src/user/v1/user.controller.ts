import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ReqRegisterDto } from './dto/req/reqRegister.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResAllUsersDto } from './dto/res/resAllUsers.dto';
import { ReqUpdateDto } from './dto/req/reqUpdate.dto';

@Controller({
  path: 'api/v1/users',
})
@ApiTags('User API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @ApiOperation({
    summary: '사용자 전체 조회',
    description: '사용자 전체 조회 API',
  })
  @ApiResponse({
    type: [ResAllUsersDto],
  })
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:userId')
  @ApiOperation({
    summary: '특정 사용자 조회',
    description: '특정 사용자 조회 API',
  })
  @ApiResponse({
    type: ResAllUsersDto,
  })
  getUser(@Param('userId') userId: number) {
    return this.userService.getUser(userId);
  }

  @Patch('/:userId')
  @ApiOperation({
    summary: '사용자 정보 수정',
    description: '사용자 정보 수정 API',
  })
  updateUser(@Param('userId') userId: number, @Body() dto: ReqUpdateDto) {
    Logger.log(`userId: ${userId}`);
    Logger.log(`dto: ${dto.name}`);
    Logger.log(`dto: ${dto.address}`);
    Logger.log(`dto: ${dto.email}`);
    this.userService.updateUser(userId, dto);
    return {
      message: 'success',
    };
  }

  @Post('/register')
  @ApiOperation({
    summary: '회원가입',
    description: '회원가입 API',
  })
  userRegister(@Body() dto: ReqRegisterDto) {
    Logger.log('POST register');
    return this.userService.register(dto);
  }
}
