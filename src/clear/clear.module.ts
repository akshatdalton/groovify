import { Module } from "@nestjs/common";
import { ClearService } from "./clear.service";
import { ClearController } from "./clear.controller";

@Module({
    providers: [ClearService],
    controllers: [ClearController],
})
export class ClearModule {}
