import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class LoopSongService {
    async loopSong(loop: boolean): Promise<void> {
        await vlcApp.vlcService.setRepeating(loop);
    }
}
