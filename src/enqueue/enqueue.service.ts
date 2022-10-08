import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EnqueueService {
    async enqueueSong(songPath: string): Promise<void> {
        vlcApp.vlcService.addToPlaylist(songPath);
    }
}
