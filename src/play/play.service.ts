import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PlayService {
    async play(songPathUri: string): Promise<boolean> {
        // WHile adding to the queue here -> we can also add
        // to our queue with extra meta data of the song.
        const isPlaying = await vlcApp.vlcService.isPlaying();
        if (isPlaying) {
            await vlcApp.vlcService.addToPlaylist(songPathUri);
        } else {
            // await vlcApp.vlcService.pause();
            await vlcApp.vlcService.playFile(songPathUri);
        }
        // This will tell the cli that if the current song will be played or enqueued.
        return !isPlaying;
    }

    private async getFirstSongFromPlaylist() {
        const vlcPlaylist = await vlcApp.vlcService.getPlaylist();
        return vlcPlaylist[0];
    }
}
