import { YoutubeModule } from "src/youtube/youtube.module";
import { PlayController } from "./play.controller";
import { Module } from "@nestjs/common";
import { PlayService } from "./play.service";

@Module({
    imports: [YoutubeModule],
    controllers: [PlayController],
    providers: [PlayService],
})
export class PlayModule {}
