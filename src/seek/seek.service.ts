import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeekService {
    async seek(seconds: number): Promise<void> {
        await vlcApp.vlcService.setTime(seconds);
    }
}
