import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeekService {
    async seekSong(val: string): Promise<void> {
        await vlcApp.vlcService.jumpForward(val);
    }
}
