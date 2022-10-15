import { Injectable } from "@nestjs/common";
import { PlaylistEntry } from "vlc-client/dist/Types";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class JumpService {
    async jump(position: number): Promise<void> {
        const playlist = await vlcApp.vlcService.getPlaylist();
        const entry: PlaylistEntry = playlist[position];
        await vlcApp.vlcService.playFromPlaylist(entry.id);
    }
}
