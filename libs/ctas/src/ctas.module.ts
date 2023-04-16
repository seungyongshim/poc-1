import { Module } from '@nestjs/common';
import { CtasService } from './ctas.service';

@Module({
  providers: [CtasService],
  exports: [CtasService],
})
export class CtasModule {}
