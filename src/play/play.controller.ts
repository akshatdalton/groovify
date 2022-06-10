import { Body, Controller, Post } from "@nestjs/common";
import { PlaySongDto } from "../dto/play.dto";
<<<<<<< HEAD
import { PlayService } from './play.service';

@Controller("play")
export class PlayController {
    constructor(private readonly playService: PlayService) {}

    @Post()
    playSong(@Body() playSongDto: PlaySongDto): string {
        this.playService.play();
=======

@Controller("play")
export class PlayController {
    @Post()
    playSong(@Body() playSongDto: PlaySongDto): string {
>>>>>>> f364f2e (Add dummy `play` command.)
        return playSongDto.query;
    }
}
