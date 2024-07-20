import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleGuard } from './guard/example.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ExampleGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
