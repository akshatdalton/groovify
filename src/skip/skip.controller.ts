import { SkipService } from "./skip.service";
import { Controller, Patch } from "@nestjs/common";

@Controller("skip")
export class SkipController {
    constructor(private readonly skipService: SkipService) {}

    @Patch()
    async skipSong() {
        await this.skipService.skipSong();
    }
}
