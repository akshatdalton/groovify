import { BackService } from "./back.service";
import { Controller, Patch } from "@nestjs/common";

@Controller("back")
export class BackController {
    constructor(private readonly backService: BackService) {}

    @Patch()
    async backSong() {
        await this.backService.backSong();
    }
}
