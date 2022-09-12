import { vlcApp } from "./../vlc/vlc";
import path from "path";
import { get_base_filepath } from "./../utils/utils";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EnqueueService {
    async enqueueSong(query: string): Promise<void> {
        console.log("query = ", query);
        const base_filepath = get_base_filepath();
        const song_path = path.join(base_filepath, query);
        await vlcApp.enqueueSong(song_path);
    }
}
