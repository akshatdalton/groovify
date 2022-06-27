import { PlayController } from "./play.controller";
import { Module } from "@nestjs/common";
import { PlayService } from "./play.service";

@Module({
    imports: [],
    controllers: [PlayController],
    providers: [PlayService],
})
export class PlayModule {}
