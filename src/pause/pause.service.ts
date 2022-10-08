import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PauseService {
    async pause(): Promise<void> {
        await vlcApp.vlcService.pause();
    }
}
