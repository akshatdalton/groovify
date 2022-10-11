import { server } from "../utils";
import * as commander from "commander";

export const unpauseCommand = new commander.Command("unpause");

unpauseCommand.description("Resumes playback").action(async () => {
    await server.put("/pause", {
        pause: false,
    });
});
