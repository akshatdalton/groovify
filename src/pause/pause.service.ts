import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PauseService {
    async pause(pause: boolean): Promise<void> {
        if (pause) {
            await vlcApp.vlcService.pause();
        } else {
            await vlcApp.vlcService.play();
        }
    }
}
