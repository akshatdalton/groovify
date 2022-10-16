import { Body, Controller, Patch } from "@nestjs/common";
import moment from "moment";
import { SeekService } from "./seek.service";
import { SeekDto } from "./../dto/seek.dto";

@Controller("seek")
export class SeekController {
    constructor(private readonly seekService: SeekService) {}

    @Patch()
    playSong(@Body() seekDto: SeekDto): void {
        const seconds = this.convertTimestampToSeconds(seekDto.timestamp);
        this.seekService.seek(seconds);
    }

    private convertTimestampToSeconds(timestamp: string): number {
        // Add regex validation if timestamp matches: hh:mm:ss and each
        // value is a number. - Try to put it as a decorator of NestJS
        let expr: string;
        const exprCount = timestamp.split(":").length;
        switch (exprCount) {
            case 1:
                expr = "ss";
                break;
            case 2:
                expr = "mm:ss";
                break;
            case 3:
                expr = "HH:mm:ss";
                break;
            default:
                // raise validation error that string format nor supported.
                break;
        }
        return moment(timestamp, expr).diff(moment().startOf("day"), "seconds");
    }
}
