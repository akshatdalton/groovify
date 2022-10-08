import { LoopSongDto } from "./../dto/loopSong.dto";
import { LoopSongService } from "./loop-song.service";
import { Body, Controller, Patch } from "@nestjs/common";

@Controller("loop-song")
export class LoopSongController {
    constructor(private readonly loopSongService: LoopSongService) {}

    @Patch()
    async loopSong(@Body() loopSongDto: LoopSongDto) {
        await this.loopSongService.loopSong(loopSongDto.loop);
    }
}
