import { Module } from '@nestjs/common';
import { Poc2Controller } from './poc-2.controller';
import { Poc2Service } from './poc-2.service';

@Module({
  imports: [],
  controllers: [Poc2Controller],
  providers: [Poc2Service],
})
export class Poc2Module {}
