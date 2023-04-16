import { CatsService } from "@app/cats";
import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";

@Module({
    controllers: [CatsController],
    providers: [CatsService],
  })
export class CatsModule {}