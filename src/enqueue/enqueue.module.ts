import { EnqueueService } from "./enqueue.service";
import { EnqueueController } from "./enqueue.controller";
import { Module } from "@nestjs/common";
import { YoutubeModule } from "src/youtube/youtube.module";

@Module({
    imports: [YoutubeModule],
    controllers: [EnqueueController],
    providers: [EnqueueService],
})
export class EnqueueModule {}
