import { Module } from "@nestjs/common";
import { PlayService } from "./play.service";
import { PlayController } from "./play.controller";
import { QueueModule } from "./../queue/queue.module";
import { YoutubeModule } from "../youtube/youtube.module";

@Module({
    imports: [QueueModule, YoutubeModule],
    controllers: [PlayController],
    providers: [PlayService],
})
export class PlayModule {}
