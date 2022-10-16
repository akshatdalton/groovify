import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";
import { YouTubeResult } from "./../interfaces/youtubeResult";

@Injectable()
export class SongService {
    async song(id?: number): Promise<YouTubeResult | void> {
        if (id === null || id === undefined) {
            const currentSongIndex =
                await vlcApp.getCurrentlyPlayingIndexFromPlaylist();
            if (currentSongIndex === -1) {
                // throw `message` saying no song is being played.
                return;
            }
            return vlcApp.playlist[currentSongIndex];
        }
        // Make sure controller is doing validation on `id` for < playlist.length.
        return vlcApp.playlist[id];
    }
}
