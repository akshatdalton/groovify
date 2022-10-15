import { stop_app } from "../common";
import child_process from "child_process";
import { savePid, getGroovifyPath } from "../utils";
import * as commander from "commander";

export const connectCommand = new commander.Command("connect");

connectCommand.description("connect the bot").action(async () => {
    // Stop any already running app.
    stop_app();
    // There is a problem that if I'm in a relative different directory
    // then song would not be played since `yarn start` would not work.
    const groovifyPath = getGroovifyPath();
    const args = ["--cwd", groovifyPath, "start"];
    const child = child_process.spawn("yarn", args, {
        detached: true,
        stdio: ["ignore", "ignore", "ignore"],
    });
    child.unref();
    savePid(child.pid);
    // Put a 2 seconds buffer showing message: welcome to Groovify - A CLI Music Bot
    // This will give the VLC and nest server to start meanwhile.
});
