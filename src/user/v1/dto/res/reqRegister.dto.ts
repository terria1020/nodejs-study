import { IsEmail, IsNotEmpty, IsString, Length, Max } from 'class-validator';

export class ReqRegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  address: string | null;

  carNumber?: string | null;
}
