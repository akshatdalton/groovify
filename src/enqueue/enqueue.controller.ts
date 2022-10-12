import { EnqueueService } from "./enqueue.service";
import { Body, Controller, Post } from "@nestjs/common";
import { YoutubeService } from "src/youtube/youtube.service";
import { EnqueueSongDto } from "src/dto/enqueue.dto";
import * as validUrl from "valid-url";
import { topNResults, YouTubeResult } from "./../interfaces/youtubeResult";

@Controller("enqueue")
export class EnqueueController {
    constructor(
        private readonly enqueueService: EnqueueService,
        private readonly youtubeService: YoutubeService,
    ) {}

    @Post()
    async enqueueSong(
        @Body() enqueueSongDto: EnqueueSongDto,
    ): Promise<void | YouTubeResult[]> {
        const { query } = enqueueSongDto;
        if (validUrl.isUri(query)) {
            await this.enqueueService.enqueueSong(query);
            return;
        }
        const result: YouTubeResult[] = await this.youtubeService.searchQuery(
            query,
        );
        return result.slice(0, topNResults);
    }
}
