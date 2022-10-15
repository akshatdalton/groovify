import { server } from "../utils";
import * as commander from "commander";

export const removeCommand = new commander.Command("remove");

removeCommand
    .description("Removes the specified track from the queue")
    .argument("<position>", "track position")
    .action(async (position: number) => {
        await server.delete("/remove", {
            data: {
                position,
            },
        });
    });
