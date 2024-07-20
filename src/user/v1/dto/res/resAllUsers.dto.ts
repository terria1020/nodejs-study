import { ApiProperty } from '@nestjs/swagger';

export class ResAllUsersDto {
  constructor(userId: number, name: string, email: string) {
    this.userId = userId;
    this.name = name;
    this.email = email;
  }

  @ApiProperty({ description: '사용자 id' })
  userId: number;

  @ApiProperty({ description: '사용자 이름' })
  name: string;

  @ApiProperty({ description: '사용자 이메일' })
  email: string;
}
