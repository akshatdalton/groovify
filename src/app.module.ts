import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayController } from "./play/play.controller";
import { PlayService } from "./play/play.service";
import { PlayModule } from "./play/play.module";
import { PauseController } from "./pause/pause.controller";
import { PauseService } from "./pause/pause.service";
import { PauseModule } from "./pause/pause.module";
import { SeekController } from "./seek/seek.controller";
import { SeekService } from "./seek/seek.service";
import { SeekModule } from "./seek/seek.module";
import { YoutubeModule } from "./youtube/youtube.module";
import { YoutubeService } from "./youtube/youtube.service";
import { QueueModule } from "./queue/queue.module";
import { QueueService } from "./queue/queue.service";
import { QueueController } from "./queue/queue.controller";
import { SkipController } from "./skip/skip.controller";
import { SkipModule } from "./skip/skip.module";
import { SkipService } from "./skip/skip.service";
import { BackModule } from "./back/back.module";
import { BackController } from "./back/back.controller";
import { BackService } from "./back/back.service";
import { ClearModule } from "./clear/clear.module";
import { ClearController } from "./clear/clear.controller";
import { ClearService } from "./clear/clear.service";
import { LoopQueueModule } from "./loop-queue/loop-queue.module";
import { LoopQueueService } from "./loop-queue/loop-queue.service";
import { LoopQueueController } from "./loop-queue/loop-queue.controller";
import { LoopSongModule } from "./loop-song/loop-song.module";
import { LoopSongService } from "./loop-song/loop-song.service";
import { LoopSongController } from "./loop-song/loop-song.controller";
import { JumpModule } from "./jump/jump.module";
import { JumpService } from "./jump/jump.service";
import { JumpController } from "./jump/jump.controller";
import { RemoveModule } from "./remove/remove.module";
import { RemoveController } from "./remove/remove.controller";
import { RemoveService } from "./remove/remove.service";
import { ShuffleModule } from "./shuffle/shuffle.module";
import { ShuffleService } from "./shuffle/shuffle.service";
import { ShuffleController } from "./shuffle/shuffle.controller";
import { SongModule } from "./song/song.module";
import { SongController } from "./song/song.controller";
import { SongService } from "./song/song.service";

@Module({
    imports: [
        PlayModule,
        PauseModule,
        SeekModule,
        YoutubeModule,
        QueueModule,
        SkipModule,
        BackModule,
        ClearModule,
        LoopQueueModule,
        LoopSongModule,
        JumpModule,
        RemoveModule,
        ShuffleModule,
        SongModule,
    ],
    controllers: [
        AppController,
        PlayController,
        PauseController,
        SeekController,
        QueueController,
        SkipController,
        BackController,
        ClearController,
        LoopQueueController,
        LoopSongController,
        JumpController,
        RemoveController,
        ShuffleController,
        SongController,
    ],
    providers: [
        AppService,
        PlayService,
        PauseService,
        SeekService,
        YoutubeService,
        QueueService,
        SkipService,
        BackService,
        ClearService,
        LoopQueueService,
        LoopSongService,
        JumpService,
        RemoveService,
        ShuffleService,
        SongService,
    ],
})
export class AppModule {}
