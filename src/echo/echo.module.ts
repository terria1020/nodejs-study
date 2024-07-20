import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { EchoService } from './echo.service';
import { SocketIoGateway } from 'src/socket.io/socket.io.gateway';

@Module({
  controllers: [EchoController],
  providers: [EchoService, SocketIoGateway]
})
export class EchoModule {}
