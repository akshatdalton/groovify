import { Injectable } from "@nestjs/common";
import fs from "fs";
import path from "path";
import * as yt from "youtube-search-without-api-key";
import ytdl from "ytdl-core";
import { get_base_filepath } from "src/utils/utils";

@Injectable()
export class YoutubeService {
    async searchQuery(query: string) {
        const videos = await yt.search(query);
        // Return top 5 relevant results
        return videos.slice(0, 5);
    }

    async downloadYouTubeMusic(url: string, query: string): Promise<string> {
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
