import { server } from "../utils";
import * as commander from "commander";

export const backCommand = new commander.Command("back");

backCommand.description("Pauses playback").action(async () => {
    await server.put("/pause", {
        pause: true,
    });
});
