import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // 서비스 시작 시 디비 연결 설정
  async onModuleInit() {
    await this.$connect();
  }

  // 서비스 종료 시 디비 연결 종료 설정
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
