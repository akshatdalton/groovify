import { Module } from "@nestjs/common";
import { BackService } from "./back.service";
import { BackController } from "./back.controller";

@Module({
    providers: [BackService],
    controllers: [BackController],
})
export class BackModule {}
