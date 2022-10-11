import { loopQueueCommand } from "./loopQueueCommand";
import { loopTrackCommand } from "./loopTrackCommand";
import * as commander from "commander";

export const loopCommand = new commander.Command("loop");

loopCommand
    .description("Loop your current song or queue")
    .addCommand(loopTrackCommand)
    .addCommand(loopQueueCommand);
