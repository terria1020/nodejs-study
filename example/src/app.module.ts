import { UsersController } from './users/users.controller';
import { Module } from '@nestjs/common';
import { AuthController, AuthV2Controller } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule],
})
export class AppModule {}
