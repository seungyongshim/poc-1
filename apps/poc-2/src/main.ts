import { NestFactory } from '@nestjs/core';
import { Poc2Module } from './poc-2.module';

async function bootstrap() {
  const app = await NestFactory.create(Poc2Module);
  await app.listen(3000);
}
bootstrap();
