import { Module } from "@nestjs/common";
import { RemoveController } from "./remove.controller";
import { RemoveService } from "./remove.service";
import { QueueModule } from "./../queue/queue.module";

@Module({
    imports: [QueueModule],
    providers: [RemoveService],
    controllers: [RemoveController],
})
export class RemoveModule {}
