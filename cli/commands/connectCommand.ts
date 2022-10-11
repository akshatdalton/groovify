import { stop_app } from "../common";
import child_process from "child_process";
import { savePid } from "../utils";
import * as commander from "commander";

export const connectCommand = new commander.Command("connect");

connectCommand.description("connect the bot").action(async () => {
    // Stop any already running app.
    stop_app();
    const args = ["start"];
    const child = child_process.spawn("yarn", args, {
        detached: true,
        stdio: ["ignore", "ignore", "ignore"],
    });
    child.unref();
    savePid(child.pid);
});
