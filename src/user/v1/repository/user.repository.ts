import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReqRegisterDto } from '../dto/res/reqRegister.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(dto: ReqRegisterDto) {
    return this.prisma.$transaction([
      this.prisma.user.create({
        data: dto,
      }),
    ]);
  }

  async findByName(params: { name: string }) {
    return this.prisma.user.findMany({
      where: {
        name: params.name,
      },
    });
  }
}
