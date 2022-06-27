import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayController } from "./play/play.controller";
import { PlayService } from "./play/play.service";
import { PlayModule } from "./play/play.module";
import { PauseController } from "./pause/pause.controller";
import { PauseService } from "./pause/pause.service";
import { PauseModule } from "./pause/pause.module";

@Module({
    imports: [PlayModule, PauseModule],
    controllers: [AppController, PlayController, PauseController],
    providers: [AppService, PlayService, PauseService],
})
export class AppModule {}
