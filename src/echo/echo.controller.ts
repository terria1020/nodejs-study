import { Body, Controller, Post } from '@nestjs/common';
import { EchoService } from './echo.service';

@Controller('echo')
export class EchoController {
    
    constructor(private readonly echoService: EchoService) {}

    @Post()
    echoSocket(@Body() dto: any) {
        this.echoService.echoSocketEvent(dto);
    }
}
