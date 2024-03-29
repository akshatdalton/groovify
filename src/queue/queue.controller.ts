import { QueueService } from "./queue.service";
import { Controller, Get } from "@nestjs/common";

@Controller("queue")
export class QueueController {
    constructor(private readonly queueService: QueueService) {}

    @Get()
    getPlaylist() {
        return this.queueService.getPlaylist();
    }
}
