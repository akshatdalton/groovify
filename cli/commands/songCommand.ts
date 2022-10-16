import { server } from "../utils";
import * as commander from "commander";

export const songCommand = new commander.Command("song");

songCommand
    .description("song the current song")
    .argument("[id]", "entry id")
    .action(async (id?: number) => {
        const response = await server.get("/song", { params: { id } });
        console.log(response.data);
    });
