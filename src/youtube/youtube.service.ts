import { Injectable } from "@nestjs/common";
import fs from "fs";
import path from "path";
import * as yt from "youtube-search-without-api-key";
import ytdl, { thumbnail, videoInfo } from "ytdl-core";
import { get_base_filepath } from "src/utils/utils";
import * as ytMusic from "node-youtube-music";
import { MusicVideo } from "node-youtube-music";
import { maxThumbnailSize, YouTubeResult } from "./../interfaces/youtubeResult";
import LRU from "lru-cache";

/* 
 Observed that we may query the same
 thing done in previous 3 attempts.
 */
const cache = new LRU({ max: 3 });

@Injectable()
export class YoutubeService {
    async searchQuery(query: string): Promise<YouTubeResult[]> {
        // Add decorator for query preparator and lru cache.
        if (!query.includes("song") || !query.includes("music")) {
            // Force YouTube APIs to provide results related to `song`.
            query += " song";
        }
        if (cache.has(query)) {
            return await cache.get(query);
        }
        let results: YouTubeResult[] = [];
        try {
            // package: `node-youtube-music` uses api key to search,
            // so we must be careful about youtube quota limit.
            results = await this.getYouTubeMusicByQuery(query);
        } catch (e) {
            try {
                results = await this.getYouTubeVideosByQuery(query);
            } catch (e) {}
        }
        cache.set(query, results);
        return results;
    }

    isValidUrl(url: string): boolean {
        return ytdl.validateURL(url);
    }

    private mapYouTubeVideosToMusics(videos: any[]): YouTubeResult[] {
        // There is a slight chance that this modification
        // would not work depending on the video if it's
        // YouTube music version is available or not.
        const musics: YouTubeResult[] = videos.map((video) => ({
            url: `https://music.youtube.com/watch?v=${video.id.videoId}`,
            title: video.title,
            duration: video.duration_raw,
            thumbnailUrl: video.snippet.thumbnails.url,
        }));
        return musics;
    }

    private async getYouTubeVideosByQuery(
        query: string,
    ): Promise<YouTubeResult[]> {
        const videos = await yt.search(query);
        return this.mapYouTubeVideosToMusics(videos);
    }

    private async getYouTubeMusicByQuery(
        query: string,
    ): Promise<YouTubeResult[]> {
        const musics: MusicVideo[] = await ytMusic.searchMusics(query);
        return musics.map(
            (music: MusicVideo): YouTubeResult => ({
                url: `https://music.youtube.com/watch?v=${music.youtubeId}`,
                title: music.title,
                duration: music.duration.label,
                thumbnailUrl: music.thumbnailUrl,
            }),
        );
    }

    async getYoutubeUrlInfo(url: string): Promise<YouTubeResult> {
        const getThumbnailUrl = (thumbnails: thumbnail[]): string => {
            for (let index = thumbnails.length - 1; index >= 0; --index) {
                const _thumbnail = thumbnails[index];
                if (
                    _thumbnail.width < maxThumbnailSize ||
                    _thumbnail.height < maxThumbnailSize
                ) {
                    return _thumbnail.url;
                }
            }
            return thumbnails[0].url;
        };

        const response: videoInfo = await ytdl.getInfo(url);
        const videoDetails = response.videoDetails;
        return {
            url,
            title: videoDetails.title,
            duration: videoDetails.lengthSeconds,
            thumbnailUrl: getThumbnailUrl(videoDetails.thumbnails),
        };
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
