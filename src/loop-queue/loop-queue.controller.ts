import { LoopQueueService } from "./loop-queue.service";
import { Controller, Patch } from "@nestjs/common";

@Controller("loop-queue")
export class LoopQueueController {
    constructor(private readonly loopQueueService: LoopQueueService) {}

    @Patch()
    async loopQueue() {
        await this.loopQueueService.loopQueue();
    }
}
