import { SeekService } from "./seek.service";
import { Body, Controller, Put } from "@nestjs/common";

@Controller("seek")
export class SeekController {
    constructor(private readonly seekService: SeekService) {}

    @Put()
    playSong(@Body("val") val: string): string {
        this.seekService.seekSong(val);
        return val;
    }
}
