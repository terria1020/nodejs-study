import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [],
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        user: configService.get('MONGO_USER'),
        pass: configService.get('MONGO_PASS'),
      }),
    }),
  ],
})
export class MongoModule {}
