import { EnqueueService } from "./enqueue.service";
import { EnqueueController } from "./enqueue.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [EnqueueController],
    providers: [EnqueueService],
})
export class EnqueueModule {}
