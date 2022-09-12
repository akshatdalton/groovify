import { SeekService } from "./seek.service";
import { Body, Controller, Post, Put } from "@nestjs/common";

@Controller("seek")
export class SeekController {
    constructor(private readonly seekService: SeekService) {}

    @Post()
    playSong(@Body("val") val: string): string {
        this.seekService.seekSong(val);
        return val;
    }
}
