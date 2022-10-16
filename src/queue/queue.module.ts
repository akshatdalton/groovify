import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";
import { YoutubeModule } from "./../youtube/youtube.module";

@Module({
    imports: [YoutubeModule],
    providers: [QueueService],
    controllers: [QueueController],
    exports: [QueueService],
})
export class QueueModule {}
