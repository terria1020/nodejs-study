import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReqRegisterDto } from '../dto/req/reqRegister.dto';
import { ResAllUsersDto } from '../dto/res/resAllUsers.dto';

@Injectable()
export class UserRepository {
  async findUser(userId: number) {
    return await this.prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users.map((user) => {
      return new ResAllUsersDto(user.user_id, user.name, user.email);
    });
  }
  constructor(private readonly prisma: PrismaService) {}

  async createUser(dto: ReqRegisterDto) {
    return await this.prisma.$transaction([
      this.prisma.user.create({
        data: dto,
      }),
    ]);
  }

  async findByName(params: { name: string }) {
    return await this.prisma.user.findMany({
      where: {
        name: params.name,
      },
    });
  }
}
