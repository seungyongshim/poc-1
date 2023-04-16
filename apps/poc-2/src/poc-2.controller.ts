import { Controller, Get } from '@nestjs/common';
import { Poc2Service } from './poc-2.service';

@Controller()
export class Poc2Controller {
  constructor(private readonly poc2Service: Poc2Service) {}

  @Get()
  getHello(): string {
    return this.poc2Service.getHello();
  }
}
