import { server } from "../utils";
import * as commander from "commander";

export const queueCommand = new commander.Command("queue");

queueCommand.description("Displays the current song queue").action(async () => {
    const response = await server.get("/queue");
    const playlist = response.data;
    // Use chalk to prettify it.
    console.log(playlist);
});
