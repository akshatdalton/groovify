import { server } from "../utils";
import * as commander from "commander";

export const skipCommand = new commander.Command("skip");

skipCommand
    .description("Skip the current song")
    .alias("next")
    .action(async () => {
        await server.patch("/skip");
    });
