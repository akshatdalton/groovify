import { Body, Controller, Post } from "@nestjs/common";
import { YoutubeService } from "src/youtube/youtube.service";
import { PlaySongDto } from "src/dto/play.dto";
import { PlayService } from "./play.service";
import * as validUrl from "valid-url";
import { topNResults, YouTubeResult } from "./../interfaces/youtubeResult";

@Controller("play")
export class PlayController {
    constructor(
        private readonly playService: PlayService,
        private readonly youtubeService: YoutubeService,
    ) {}

    @Post()
    async playSong(
        @Body() playSongDto: PlaySongDto,
    ): Promise<void | YouTubeResult[]> {
        const { query } = playSongDto;
        if (validUrl.isUri(query)) {
            await this.playService.play(query);
            return;
        }
        const result: YouTubeResult[] = await this.youtubeService.searchQuery(
            query,
        );
        return result.slice(0, topNResults);
    }
}
