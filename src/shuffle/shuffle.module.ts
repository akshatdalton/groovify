import { Module } from "@nestjs/common";
import { ShuffleService } from "./shuffle.service";
import { ShuffleController } from "./shuffle.controller";

@Module({
    providers: [ShuffleService],
    controllers: [ShuffleController],
})
export class ShuffleModule {}
