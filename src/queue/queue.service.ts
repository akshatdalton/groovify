import { Injectable } from "@nestjs/common";
import { vlcApp } from "./../vlc/vlc";
import { YouTubeResult } from "./../interfaces/youtubeResult";
import { YoutubeService } from "../youtube/youtube.service";

@Injectable()
export class QueueService {
    constructor(private readonly youtubeService: YoutubeService) {}

    getPlaylist(): YouTubeResult[] {
        return vlcApp.playlist;
    }

    async addSongUrl(url: string): Promise<void> {
        const songInfo = await this.youtubeService.getYoutubeUrlInfo(url);
        vlcApp.playlist.push(songInfo);
    }

    removeSong(entry_id: number): void {
        vlcApp.playlist.splice(entry_id, 1);
    }

    clearPlaylist(): void {
        vlcApp.playlist = [];
    }

    get length() {
        return vlcApp.playlist.length;
    }
}
