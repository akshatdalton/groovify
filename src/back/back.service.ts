import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class BackService {
    async backSong(): Promise<void> {
        await vlcApp.vlcService.previous();
    }
}
