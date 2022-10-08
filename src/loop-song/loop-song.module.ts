import { Module } from "@nestjs/common";
import { LoopSongService } from "./loop-song.service";
import { LoopSongController } from "./loop-song.controller";

@Module({
    providers: [LoopSongService],
    controllers: [LoopSongController],
})
export class LoopSongModule {}
