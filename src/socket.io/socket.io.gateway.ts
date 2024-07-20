import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from "socket.io";


@WebSocketGateway(8002, {
  cors: 'localhost',
})
export class SocketIoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  getServer(): Server {
    return this.server;
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.server.emit('echo', 'connected..');
  }
  handleDisconnect(client: Socket) {
    // nothing
  }

  @SubscribeMessage('echo')
  handleEcho(client: Socket, payload: any) {
    const events: string = payload.event;

    Logger.log(`client: ${client.request.eventNames()}`);
    this.server.emit('echo', `echo: ${payload}`);
  }

}
