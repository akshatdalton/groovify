import { Body, Controller, Delete } from "@nestjs/common";
import { RemoveService } from "./remove.service";
import { RemoveDto } from "./../dto/remove.dto";

@Controller("remove")
export class RemoveController {
    constructor(private readonly removeService: RemoveService) {}

    @Delete()
    async remove(@Body() removeDto: RemoveDto) {
        // TODO: Validate if 0 < position < vlcPlaylist.length.
        await this.removeService.remove(removeDto.position);
    }
}
