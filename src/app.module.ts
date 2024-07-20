import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketIoGateway } from './socket.io/socket.io.gateway';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [EchoModule],
  controllers: [AppController],
  providers: [AppService, SocketIoGateway],
})
export class AppModule {}
