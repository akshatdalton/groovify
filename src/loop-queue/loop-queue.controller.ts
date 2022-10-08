import { LoopQueueDto } from "./../dto/loopQueue.dto";
import { LoopQueueService } from "./loop-queue.service";
import { Body, Controller, Patch } from "@nestjs/common";

@Controller("loop-queue")
export class LoopQueueController {
    constructor(private readonly loopQueueService: LoopQueueService) {}

    @Patch()
    async setloopQueue(@Body() loopQueueDto: LoopQueueDto) {
        await this.loopQueueService.loopQueue(loopQueueDto.loop);
    }
}
