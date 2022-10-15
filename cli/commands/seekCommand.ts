import { server } from "../utils";
import * as commander from "commander";

export const seekCommand = new commander.Command("seek");

seekCommand
    .description(
        "Skips to the specified timestamp in the currently playing track",
    )
    .argument("<timestamp>", "timestamp")
    .action(async (timestamp: string) => {
        await server.patch("/seek", {
            timestamp,
        });
    });
