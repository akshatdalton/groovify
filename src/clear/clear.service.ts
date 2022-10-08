import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class ClearService {
    async clearPlaylist(): Promise<void> {
        await vlcApp.vlcService.emptyPlaylist();
    }
}
