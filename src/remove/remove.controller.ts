import { Body, Controller, Delete } from "@nestjs/common";
import { RemoveService } from "./remove.service";
import { RemoveDto } from "./../dto/remove.dto";
import { QueueService } from "./../queue/queue.service";

@Controller("remove")
export class RemoveController {
    constructor(
        private readonly removeService: RemoveService,
        private readonly queueService: QueueService,
    ) {}

    @Delete()
    async remove(@Body() removeDto: RemoveDto) {
        // TODO: Validate if 0 < position < vlcPlaylist.length.
        await this.removeService.remove(removeDto.position);
        this.queueService.removeSong(removeDto.position);
    }
}
