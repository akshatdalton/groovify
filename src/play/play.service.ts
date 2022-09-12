import { vlcApp } from "./../vlc/vlc";
import { Injectable } from "@nestjs/common";
import path from "path";
import { get_base_filepath } from "../utils/utils";

@Injectable()
export class PlayService {
    async play(query: string): Promise<void> {
        console.log("query = ", query);
        const base_filepath = get_base_filepath();
        const song_path = path.join(base_filepath, query);
        await vlcApp.addSong(song_path);
    }
}
