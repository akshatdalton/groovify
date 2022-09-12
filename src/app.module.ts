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

@Module({
    imports: [PlayModule, PauseModule, SeekModule, EnqueueModule],
    controllers: [
        AppController,
        PlayController,
        PauseController,
        SeekController,
        EnqueueController,
    ],
    providers: [
        AppService,
        PlayService,
        PauseService,
        SeekService,
        EnqueueService,
    ],
})
export class AppModule {}
