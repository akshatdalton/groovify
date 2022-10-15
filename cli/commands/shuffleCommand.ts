import { server } from "../utils";
import * as commander from "commander";

export const shuffleCommand = new commander.Command("shuffle");

shuffleCommand
    .description("Randomizes the current order of tracks in the queue")
    .option("--off", "Turn off randomization", false)
    .action(async (options) => {
        await server.put("/shuffle", {
            random: !options.off,
        });
    });
