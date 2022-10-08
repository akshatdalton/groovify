import { Injectable } from "@nestjs/common";
import { PlaylistEntry } from "vlc-client/dist/Types";
import { vlcApp } from "./../vlc/vlc";

@Injectable()
export class QueueService {
    async getPlaylist() {
        const vlcPlaylist = await vlcApp.vlcService.getPlaylist();
        return vlcPlaylist.map((item: PlaylistEntry) => {
            return {
                name: item.name,
                duration: item.duration,
                isCurrent: item.isCurrent,
            };
        });
    }
}
