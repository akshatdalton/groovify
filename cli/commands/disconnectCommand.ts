import { stop_app } from "../common";
import * as commander from "commander";

export const disconnectCommand = new commander.Command("disconnect");

disconnectCommand.description("disconnect the app").action(() => {
    stop_app();
});
