import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PlayService {
    async play(songPathUri: string): Promise<void> {
        await vlcApp.vlcService.pause();
        // await vlcApp.vlcService.playFile(songPath, { wait: true });
        // await vlcApp.vlcService.emptyPlaylist();
        // await vlcApp.vlcService.addToPlaylist(songPathUri);
        // const firstSong = await this.getFirstSongFromPlaylist();
        // await vlcApp.vlcService.playFromPlaylist(firstSong.id);
        await vlcApp.vlcService.playFile(songPathUri);
    }

    private async getFirstSongFromPlaylist() {
        const vlcPlaylist = await vlcApp.vlcService.getPlaylist();
        return vlcPlaylist[0];
    }
}
