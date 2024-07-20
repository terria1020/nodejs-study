import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReqRegisterDto } from '../dto/req/reqRegister.dto';
import { ReqUpdateDto } from '../dto/req/reqUpdate.dto';

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

  async updateUser(userId: number, dto: ReqUpdateDto) {
    this.prisma.$transaction([
      this.prisma.user.update({
        where: {
          user_id: userId,
        },
        data: {
          name: dto.name,
          email: dto.email,
          address: dto.address,
        },
      }),
    ]);
  }

  deleteUser(userId: number) {
    this.prisma.$transaction([
      this.prisma.user.delete({
        where: {
          user_id: userId,
        },
      }),
    ]);
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
