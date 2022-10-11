import { server } from "../utils";
import * as commander from "commander";

export const clearCommand = new commander.Command("clear");

clearCommand
    .description("Removes all tracks from the queue")
    .action(async () => {
        await server.delete("/clear");
    });
