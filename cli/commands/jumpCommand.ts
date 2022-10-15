import { server } from "../utils";
import * as commander from "commander";

export const jumpCommand = new commander.Command("jump");

jumpCommand
    .description("Skips to the specified track")
    .argument("<position>", "track position to jump to")
    .action(async (position: number) => {
        await server.put("/jump", { position });
    });
