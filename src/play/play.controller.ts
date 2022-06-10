import { Body, Controller, Post } from "@nestjs/common";
import { PlaySongDto } from "../dto/play.dto";
import { PlayService } from './play.service';

@Controller("play")
export class PlayController {
    constructor(private readonly playService: PlayService) {}

    @Post()
    playSong(@Body() playSongDto: PlaySongDto): string {
        this.playService.play();
        return playSongDto.query;
    }
}
