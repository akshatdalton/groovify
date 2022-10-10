import { Body, Controller, Post } from "@nestjs/common";
import { YoutubeService } from "src/youtube/youtube.service";
import { PlaySongDto } from "src/dto/play.dto";
import { PlayService } from "./play.service";

@Controller("play")
export class PlayController {
    constructor(
        private readonly playService: PlayService,
        private readonly youtubeService: YoutubeService,
    ) {}

    @Post()
    async playSong(@Body() playSongDto: PlaySongDto): Promise<string> {
        const { query } = playSongDto;
        const result = await this.youtubeService.searchQuery(query);
        await this.playService.play(result[0].url);
        return query;
    }
}
