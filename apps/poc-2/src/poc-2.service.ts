import { Injectable } from '@nestjs/common';

@Injectable()
export class Poc2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
