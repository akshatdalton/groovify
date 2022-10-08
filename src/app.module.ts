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
import { EnqueueController } from "./enqueue/enqueue.controller";
import { EnqueueService } from "./enqueue/enqueue.service";
import { EnqueueModule } from "./enqueue/enqueue.module";
import { YoutubeModule } from "./youtube/youtube.module";
import { YoutubeService } from "./youtube/youtube.service";
import { QueueModule } from "./queue/queue.module";
import { QueueService } from "./queue/queue.service";
import { QueueController } from "./queue/queue.controller";
import { SkipController } from "./skip/skip.controller";
import { SkipModule } from "./skip/skip.module";
import { SkipService } from "./skip/skip.service";

@Module({
    imports: [
        PlayModule,
        PauseModule,
        SeekModule,
        EnqueueModule,
        YoutubeModule,
        QueueModule,
        SkipModule,
    ],
    controllers: [
        AppController,
        PlayController,
        PauseController,
        SeekController,
        EnqueueController,
        QueueController,
        SkipController,
    ],
    providers: [
        AppService,
        PlayService,
        PauseService,
        SeekService,
        EnqueueService,
        YoutubeService,
        QueueService,
        SkipService,
    ],
})
export class AppModule {}
