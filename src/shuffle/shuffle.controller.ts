import { Body, Controller, Put } from "@nestjs/common";
import { ShuffleService } from "./shuffle.service";
import { ShuffleDto } from "./../dto/shuffle.dto";

@Controller("shuffle")
export class ShuffleController {
    constructor(private readonly shuffleService: ShuffleService) {}

    @Put()
    async shuffle(@Body() shuffleDto: ShuffleDto) {
        await this.shuffleService.shuffle(shuffleDto.random);
    }
}
