import { Controller, Put } from "@nestjs/common";
import { PauseService } from "./pause.service";

@Controller("pause")
export class PauseController {
    constructor(private readonly pauseService: PauseService) {}

    @Put()
    async pauseSong(): Promise<void> {
        await this.pauseService.pause();
    }
}
