import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
// npm i redis
// ehhez le kell tölteni a redis-t és el kell indítani

// npm i @nestjs/microservices
@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private appService: AppService) {}

  @MessagePattern('add')
  async accumulate(data: number[])  {
    this.logger.log('Adding ' + data.toString());
    return "this.appService.accumulate(data)";
  }
}
