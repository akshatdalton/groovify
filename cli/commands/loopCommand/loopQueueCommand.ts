import { server } from "../../utils";
import * as commander from "commander";

export const loopQueueCommand = new commander.Command("queue");

loopQueueCommand
    .description("Starts looping your current queue")
    .option("--off")
    .action(async (options) => {
        await server.patch("/loop-song", {
            loop: options.off,
        });
    });
