import { QueueService } from "./queue.service";
import { Controller, Get } from "@nestjs/common";

@Controller("queue")
export class QueueController {
    constructor(private readonly queueService: QueueService) {}

    @Get()
    async getPlaylist() {
        // add return type: Partial of PlaylistEntry
        return await this.queueService.getPlaylist();
    }
}
