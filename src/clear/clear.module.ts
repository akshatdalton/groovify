import { Module } from "@nestjs/common";
import { ClearService } from "./clear.service";
import { ClearController } from "./clear.controller";
import { QueueModule } from "./../queue/queue.module";

@Module({
    imports: [QueueModule],
    providers: [ClearService],
    controllers: [ClearController],
})
export class ClearModule {}
