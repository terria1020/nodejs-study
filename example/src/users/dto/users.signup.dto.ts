import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserSignupReqDto {
  @IsEmail()
  loginEmail: string;
  @IsString()
  @IsNotEmpty()
  loginPw: string;
}
