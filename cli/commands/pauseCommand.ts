import { server } from "../utils";
import * as commander from "commander";

export const pauseCommand = new commander.Command("pause");

pauseCommand.description("Pauses playback").action(async () => {
    await server.put("/pause", {
        pause: true,
    });
});
