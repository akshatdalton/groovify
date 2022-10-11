import { Injectable } from "@nestjs/common";
import fs from "fs";
import path from "path";
import * as yt from "youtube-search-without-api-key";
import ytdl from "ytdl-core";
import { get_base_filepath } from "src/utils/utils";
import * as ytMusic from "node-youtube-music";
import { MusicVideo } from "node-youtube-music";

@Injectable()
export class YoutubeService {
    async searchQuery(query: string) {
        if (!query.includes("song") || !query.includes("music")) {
            // Force YouTube to provide results related to `music`.
            query += " music";
        }
        // TODO: Define a common structure/interface for
        // what should be returned by `getYouTubeVideosByQuery`
        // function and `getYouTubeMusicByQuery` function.
        let results = [];
        try {
            // package: `node-youtube-music` uses api key to search,
            // so we must be careful about youtube quota limit.
            results = await this.getYouTubeMusicByQuery(query);
        } catch (e) {
            try {
                results = await this.getYouTubeVideosByQuery(query);
                results = this.mapYouTubeVideosToMusics(results);
            } catch (e) {}
        }
        return results.slice(0, 5);
    }

    private mapYouTubeVideosToMusics(videos: any[]) {
        // There is a slight chance that this modification
        // would not work depending on the video if it's
        // YouTube music version is available or not.
        const musics = videos.map((video) => ({
            ...video,
            url: `https://music.youtube.com/watch?v=${video.id.videoId}`,
        }));
        return musics;
    }

    private async getYouTubeVideosByQuery(query: string) {
        const videos = await yt.search(query);
        return videos;
    }

    private async getYouTubeMusicByQuery(query: string) {
        const musics: MusicVideo[] = await ytMusic.searchMusics(query);
        return musics.map((music: MusicVideo) => ({
            url: `https://music.youtube.com/watch?v=${music.youtubeId}`,
            ...music,
        }));
    }

    private async downloadYouTubeMusic(
        url: string,
        query: string,
    ): Promise<string> {
        return new Promise((resolve, reject) => {
            const base_filepath = get_base_filepath();
            const song_path = path.join(base_filepath, `${query}.mp4`);
            ytdl(url, { filter: "audioonly" })
                .pipe(fs.createWriteStream(song_path))
                .on("finish", () => {
                    resolve(song_path);
                })
                .on("error", () => {
                    reject();
                });
        });
    }
}
