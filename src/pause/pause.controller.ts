import { PauseSongDto } from "./../dto/pause.dto";
import { Body, Controller, Put } from "@nestjs/common";
import { PauseService } from "./pause.service";

@Controller("pause")
export class PauseController {
    constructor(private readonly pauseService: PauseService) {}

    @Put()
    async pauseSong(@Body() pauseSongDto: PauseSongDto): Promise<void> {
        await this.pauseService.pause(pauseSongDto.pause);
    }
}
