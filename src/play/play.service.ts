import { Injectable } from "@nestjs/common";
import { pid } from "process";
import expandTilde from "expand-tilde";
import { writeFileSync } from "fs";
import path from 'path';
import { get_base_filepath } from '../utils/utils';

@Injectable()
export class PlayService {
    async play(query: string) {
        console.log("query = ", query);
        const base_filepath = get_base_filepath();
        const song_path = path.join(base_filepath, "AUDIO.mp3");
        const vlcPlayer = await (eval(`import('@richienb/vlc')`) as Promise<
            typeof import("@richienb/vlc")
        >);
        const createVlc = vlcPlayer.default;
        const vlc = await createVlc();
        console.log("vlc created");
        await vlc.command("in_play", {
            input: song_path,
        });
        console.log("vlc played");
    }
}
