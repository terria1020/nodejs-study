import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReqRegisterDto } from '../dto/req/reqRegister.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async createUser(dto: ReqRegisterDto) {
    return await this.prisma.$transaction([
      this.prisma.user.create({
        data: dto,
      }),
    ]);
  }

  async findByName(params: { name: string }) {
    const user = await this.prisma.user.findMany({
      where: {
        name: params.name,
      },
    });
    return user;
  }
}
