import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayController } from "./play/play.controller";
import { PlayService } from './play/play.service';
import { PlayModule } from './play/play.module';

@Module({
    imports: [PlayModule],
    controllers: [AppController, PlayController],
    providers: [AppService, PlayService],
})
export class AppModule {}
