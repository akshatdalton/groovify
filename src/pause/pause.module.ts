import { Module } from "@nestjs/common";
import { PauseController } from "./pause.controller";
import { PauseService } from "./pause.service";

@Module({
    imports: [],
    controllers: [PauseController],
    providers: [PauseService],
})
export class PauseModule {}
