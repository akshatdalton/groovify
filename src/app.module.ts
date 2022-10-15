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
    ],
})
export class AppModule {}
