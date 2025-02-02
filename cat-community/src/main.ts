import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const allowedOrigins: string[] = configService
    .get('ORIGIN_URL')
    .split(',') || ['http://localhost:3000'];
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  await app.listen(configService.get('SERVER_PORT'));
}
bootstrap();
