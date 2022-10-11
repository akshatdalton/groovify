import { server } from "../utils";
import * as commander from "commander";

export const backCommand = new commander.Command("back");

backCommand.description("Play the previous song").action(async () => {
    await server.patch("/back");
});
