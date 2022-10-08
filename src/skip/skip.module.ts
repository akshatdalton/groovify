import { Module } from "@nestjs/common";
import { SkipController } from "./skip.controller";
import { SkipService } from "./skip.service";

@Module({
    controllers: [SkipController],
    providers: [SkipService],
})
export class SkipModule {}
