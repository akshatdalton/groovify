import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";

@Module({
    providers: [QueueService],
    controllers: [QueueController],
})
export class QueueModule {}
