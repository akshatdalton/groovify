import { PlaySongDto } from "./../dto/play.dto";
import { EnqueueService } from "./enqueue.service";
import { Body, Controller, Put } from "@nestjs/common";

@Controller("enqueue")
export class EnqueueController {
    constructor(private readonly enqueueService: EnqueueService) {}

    @Put()
    playSong(@Body() playSongDto: PlaySongDto): string {
        console.log("query = ", playSongDto.query);
        this.enqueueService.enqueueSong(playSongDto.query);
        return playSongDto.query;
    }
}
