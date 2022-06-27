import { Injectable } from "@nestjs/common";
import { pid } from "process";
import expandTilde from "expand-tilde";
import { writeFileSync } from "fs";
import path from 'path';

@Injectable()
export class PlayService {
    async play() {
        console.log("process_id = ", process.pid);
        // console.log(path.join("~/.groovify", "audio.mp3"))
        let song_path: string = path.join(expandTilde("~"), "/", ".groovify", "AUDIO.mp3");
        const vlcPlayer = await (eval(`import('@richienb/vlc')`) as Promise<
            typeof import("@richienb/vlc")
        >);
        const createVlc = vlcPlayer.default;
        const vlc = await createVlc();
        console.log("vlc created");
        await vlc.command("in_play", {
            input: song_path,
        });
        console.log("pid = ", pid);
        writeFileSync("./test.txt", pid.toString());
        // await vlc.command("pl_stop");
        console.log("vlc played");
    }
}
