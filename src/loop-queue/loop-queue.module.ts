import { Module } from "@nestjs/common";
import { LoopQueueService } from "./loop-queue.service";
import { LoopQueueController } from "./loop-queue.controller";

@Module({
    providers: [LoopQueueService],
    controllers: [LoopQueueController],
})
export class LoopQueueModule {}
