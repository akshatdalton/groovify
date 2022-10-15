import { Module } from "@nestjs/common";
import { RemoveController } from "./remove.controller";
import { RemoveService } from "./remove.service";

@Module({
    providers: [RemoveService],
    controllers: [RemoveController],
})
export class RemoveModule {}
