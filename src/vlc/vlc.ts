import * as VLC from "vlc-client";
import { YouTubeResult } from "./../interfaces/youtubeResult";
import { PlaylistEntry } from "vlc-client/dist/Types";

class Vlc {
    private vlcServerInstance: any;
    public vlcService: any;
    public playlist: YouTubeResult[] = [];

    async createVlcApp(): Promise<void> {
        const uniqueString = (await eval(`import('unique-string')`)).default;
        const internalIp = (await eval(`import('internal-ip')`)).default;
        const getPort = (await eval(`import('get-port')`)).default;
        const execa = (await eval(`import('execa')`)).default;
        const password = uniqueString();
        const ip = await internalIp.v4();
        const port = await getPort();
        // This has to be `http/dummy` else a vlc app (prompt/interface) would open up.
        const intf = "macosx";
        const vlcPath = await this.getVlcPath();
        this.vlcServerInstance = execa(vlcPath, [
            "--intf",
            intf,
            "--extraintf",
            "http",
            "--http-host",
            ip,
            "--http-port",
            port.toString(),
            "--http-password",
            password,
        ]);
        // Server needs few seconds to start
        await new Promise((r) => setTimeout(r, 2000));
        this.vlcService = new VLC.Client({
            ip,
            port,
            password,
        });
    }

    private async getVlcPath() {
        const vlcCommand = (await eval(`import('vlc-command')`)).default;
        return new Promise((resolve, reject) => {
            vlcCommand((err: string, vlcPath: string) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(vlcPath);
                }
            });
        });
    }

    async getCurrentlyPlayingIndexFromPlaylist(): Promise<number> {
        const playlist: PlaylistEntry[] = await this.vlcService.getPlaylist();
        return playlist.findIndex((item: PlaylistEntry) => item.isCurrent);
    }

    killServer() {
        this.vlcServerInstance.kill();
    }
}

export const vlcApp = new Vlc();
vlcApp.createVlcApp();
