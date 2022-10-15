import { Body, Controller, Put } from "@nestjs/common";
import { JumpService } from "./jump.service";
import { JumpDto } from "./../dto/jump.dto";

@Controller("jump")
export class JumpController {
    constructor(private readonly jumpService: JumpService) {}

    @Put()
    async jump(@Body() jumpDto: JumpDto) {
        // TODO: Validate if 0 < position < vlcPlaylist.length.
        await this.jumpService.jump(jumpDto.position);
    }
}
