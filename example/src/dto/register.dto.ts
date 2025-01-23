import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginReqDto {
  @IsEmail()
  loginEmail: string;
  @IsString()
  @IsNotEmpty()
  loginPw: string;
}
