import { IsOptional } from 'class-validator';

export class ReqUpdateDto {
  @IsOptional()
  name: string;
  @IsOptional()
  address: string;
  @IsOptional()
  email: string;
}
