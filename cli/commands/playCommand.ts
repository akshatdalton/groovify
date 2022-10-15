import { handleServerResponse, server } from "../utils";
import * as commander from "commander";
// import inquirer from "inquirer";

export const playCommand = new commander.Command("play");

playCommand
    .description(
        "Loads your input and adds it to the queue\nIf there is no playing track, then it will start playing.",
    )
    .argument("<query>", "Pass a search query or url to play")
    .action(async (query: string) => {
        // TODO: Put spinner when making request to the server.
        let response = await handleServerResponse(
            server.post("/play", { query }),
        );
        const response_data = response.data;
        if (typeof response_data === "boolean") {
            const message = response_data ? "Playing" : "Enqueued";
            console.log(`${message} song ...`);
            // Poll the server for if playing status.
            // Add a request timeout (30 secs). If exceeded ask the user to restart
            // the app giving the reason that server took too long to respond.
            return;
        }
        const serach_results = response.data;
        const inquirer = (await eval(`import('inquirer')`)).default;
        inquirer
            .prompt({
                type: "list",
                name: "choice",
                message: "Select a song to play/enqueue",
                // If possible let's display artist information.
                choices: serach_results.map((choice, index: number) => ({
                    name: choice.title,
                    value: index,
                })),
            })
            .then(async (answer) => {
                const url = serach_results[answer.choice].url;
                response = await handleServerResponse(
                    server.post("/play", {
                        query: url,
                    }),
                );
                // TODO: bring song info while returning and display in cli.
                const message = response_data ? "Playing" : "Enqueued";
                console.log(`${message} song ...`);
            })
            .catch(() => {
                console.log("Retry");
            });
    });
