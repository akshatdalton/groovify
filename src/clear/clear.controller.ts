import { ClearService } from "./clear.service";
import { Controller, Delete } from "@nestjs/common";

@Controller("clear")
export class ClearController {
    constructor(private readonly clearService: ClearService) {}

    @Delete()
    async clearPlaylist() {
        await this.clearService.clearPlaylist();
    }
}
