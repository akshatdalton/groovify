import { Controller, Delete } from "@nestjs/common";
import { ClearService } from "./clear.service";
import { QueueService } from "./../queue/queue.service";

@Controller("clear")
export class ClearController {
    constructor(
        private readonly clearService: ClearService,
        private readonly queueService: QueueService,
    ) {}

    @Delete()
    async clearPlaylist() {
        await this.clearService.clearPlaylist();
        this.queueService.clearPlaylist();
    }
}
