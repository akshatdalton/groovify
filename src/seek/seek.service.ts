import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeekService {
    async seekSong(val: string): Promise<void> {
        console.log("val = ", val);
        await vlcApp.seekSong(val);
    }
}
