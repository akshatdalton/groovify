import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShuffleService {
    async shuffle(random: boolean): Promise<void> {
        await vlcApp.vlcService.setRandom(random);
    }
}
