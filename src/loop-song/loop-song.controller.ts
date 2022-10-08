import { LoopSongService } from "./loop-song.service";
import { Controller, Patch } from "@nestjs/common";

@Controller("loop-song")
export class LoopSongController {
    constructor(private readonly loopSongService: LoopSongService) {}

    @Patch()
    async loopSong() {
        await this.loopSongService.loopSong();
    }

    @Patch()
    async unloopSong() {
        await this.loopSongService.unloopSong();
    }
}
