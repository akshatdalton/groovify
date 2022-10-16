import { Controller, Get, Query } from "@nestjs/common";
import { SongService } from "./song.service";
import { YouTubeResult } from "./../interfaces/youtubeResult";
import { ApiQuery } from "@nestjs/swagger";

@Controller("song")
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Get()
    @ApiQuery({
        name: "id",
        type: Number,
        required: false,
    })
    async song(@Query("id") id?: number): Promise<YouTubeResult | void> {
        return await this.songService.song(id);
    }
}
