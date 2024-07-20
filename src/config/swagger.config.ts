import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'process';

export function swaggerConfig(app: INestApplication) {
  const servers = {
    localhost: {
      domain: 'http://localhost:3000',
      description: 'local',
    },
  };

  const options = new DocumentBuilder()
    .setTitle('NestJS Study Docs')
    .setDescription('NestJS Study Docs')
    .setVersion('v1')
    .addBearerAuth()
    .addServer(servers.localhost.domain, servers.localhost.description)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
