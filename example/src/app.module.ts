import { UsersController } from './users/users.controller';
import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [AuthService, PrismaService, UsersService],
})
export class AppModule {}
