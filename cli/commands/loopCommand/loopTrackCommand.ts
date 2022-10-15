import { Status } from "./../../constants";
import { server } from "../../utils";
import * as commander from "commander";

export const loopTrackCommand = new commander.Command("track");

loopTrackCommand
    .description("Starts looping your currently playing track")
    .option("--off", "Turn off looping your currently playing track", false)
    .action(async (options) => {
        // TODO: Check if this is working properly or not.
        try {
            await server.patch("/loop-song", {
                loop: !options.off,
            });
        } catch (e) {
            if (e.code === Status.ECONNREFUSED) {
                console.log("Connect the app first");
            }
        }
    });
