import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketIoGateway } from 'src/socket.io/socket.io.gateway';

@Injectable()
export class EchoService {

    constructor (private readonly socketIoGateWay: SocketIoGateway) {}

    echoSocketEvent(dto: any) {
        const eventName: string = dto.event_name;
        const data: object = dto.data;

        this.socketIoGateWay.getServer().emit(eventName, data);
    }
}
