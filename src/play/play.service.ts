import { Injectable } from '@nestjs/common';
// import createVlc from "@richienb/vlc";

@Injectable()
export class PlayService {
    async play() {
        // console.log(vlcPlayer);
        const createVlc = await import("@richienb/vlc");
        console.log("createVlc = ", createVlc);
        // const vlc = await createVlc();
        // console.log("vlc created")
        // await vlc.command("in_play", {
        //     input: "../../audio.mp3",
        // });

        // await vlc.command("pl_stop");
        console.log("vlc played")
    }
}
