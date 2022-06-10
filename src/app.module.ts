import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayController } from "./play/play.controller";
<<<<<<< HEAD
import { PlayService } from './play/play.service';
import { PlayModule } from './play/play.module';

@Module({
    imports: [PlayModule],
    controllers: [AppController, PlayController],
    providers: [AppService, PlayService],
=======

@Module({
    imports: [],
    controllers: [AppController, PlayController],
    providers: [AppService],
>>>>>>> f364f2e (Add dummy `play` command.)
})
export class AppModule {}
