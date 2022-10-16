import { server } from "../utils";
import * as commander from "commander";
import moment from "moment";

export const queueCommand = new commander.Command("queue");

const convertSecondsToTimestamp = (seconds: number) => {
    return moment.utc(seconds * 1000).format("HH:mm:ss");
};

queueCommand.description("Displays the current song queue").action(async () => {
    const response = await server.get("/queue");
    let playlist = response.data;
    playlist = playlist.map((item) => ({
        ...item,
        duration: convertSecondsToTimestamp(Number(item.duration)),
    }));
    // Use chalk to prettify it.
    console.log(playlist);
});
