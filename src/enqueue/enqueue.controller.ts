import { EnqueueService } from "./enqueue.service";
import { Body, Controller, Post } from "@nestjs/common";
import { YoutubeService } from "src/youtube/youtube.service";
import { EnqueueSongDto } from "src/dto/enqueue.dto";

@Controller("enqueue")
export class EnqueueController {
    constructor(
        private readonly enqueueService: EnqueueService,
        private readonly youtubeService: YoutubeService,
    ) {}

    @Post()
    async enqueueSong(@Body() enqueueSongDto: EnqueueSongDto): Promise<string> {
        const { query } = enqueueSongDto;
        const result = await this.youtubeService.searchQuery(query);
        await this.enqueueService.enqueueSong(result[0].url);
        return query;
    }
}
