import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class LoopQueueService {
    async loopQueue(): Promise<void> {
        await vlcApp.vlcService.setLooping(true);
    }
}
