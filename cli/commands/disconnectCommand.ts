import { stop_app } from "../common";
import * as commander from "commander";

export const disconnectCommand = new commander.Command("disconnect");

disconnectCommand.description("disconnect the bot").action(() => {
    stop_app();
});
