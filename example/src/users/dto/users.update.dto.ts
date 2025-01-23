import { IsEmail } from 'class-validator';

export class UsersUpdateDto {
  @IsEmail()
  loginEmail: string;
}
