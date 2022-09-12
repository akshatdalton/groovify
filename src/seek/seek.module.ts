import { SeekService } from "./seek.service";
import { SeekController } from "./seek.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [SeekController],
    providers: [SeekService],
})
export class SeekModule {}
