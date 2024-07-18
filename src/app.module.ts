import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/v1/user.module';
import { UserService } from './user/v1/user.service';

@Module({
  imports: [UserModule],
})
export class AppModule {}
