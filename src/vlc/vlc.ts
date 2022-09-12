class Vlc {
    private vlcService: any;
    async createVlcApp() {
        const vlcPlayer = await (eval(`import('@richienb/vlc')`) as Promise<
            typeof import("@richienb/vlc")
        >);
        const createVlc = vlcPlayer.default;
        this.vlcService = await createVlc();
    }

    fun(): string {
        return this.vlcService;
    }

    async addSong(song_path: string): Promise<void> {
        await this.vlcService.command("in_play", {
            input: song_path,
        });
        const val1 = await this.vlcService.info();
        console.log("val1 = ", val1);
    }

    async pauseSong(): Promise<void> {
        await this.vlcService.command("pl_stop");
    }

    async enqueueSong(song_path: string): Promise<void> {
        await this.vlcService.command("in_enqueue", {
            input: song_path,
        });
    }

    async seekSong(val: string): Promise<void> {
        await this.vlcService.command("seek", {
            val,
        });
    }

    async getPlaylist(): Promise<any[]> {
        const playlist = await this.vlcService.playlist();
        return playlist["children"][0]["children"];
    }
}

export const vlcApp = new Vlc();
vlcApp.createVlcApp();
