import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class SkipService {
    async skipSong(): Promise<void> {
        await vlcApp.vlcService.next();
    }
}
