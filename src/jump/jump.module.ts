import { Module } from "@nestjs/common";
import { JumpService } from "./jump.service";
import { JumpController } from "./jump.controller";

@Module({
    providers: [JumpService],
    controllers: [JumpController],
})
export class JumpModule {}
