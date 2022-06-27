import { Controller, Post } from "@nestjs/common";
import { PauseService } from "./pause.service";

@Controller("pause")
export class PauseController {
    constructor(private readonly pauseService: PauseService) {}

    @Post()
    playSong(): void {
        this.pauseService.pause();
    }
}
