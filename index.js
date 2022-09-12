// #!/usr/bin/env node

const child_process = require("child_process");
const expandTilde = require("expand-tilde");
const fs = require("fs");
const program = require("commander");
const path = require("path");
const axios = require("axios").default;

program.version("1.0.0").description("Groovify");

const server = axios.create({
    baseURL: "http://127.0.0.1:3000",
});

// import ytdl from "ytdl-core";
// // TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// // TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// // TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ytdl('https://www.youtube.com/watch?v=7xzU9Qqdqww', {filter: "audioonly"})
//   .pipe(fs.createWriteStream('test.mp3'));

const start_app = (dev = true) => {
    // Stop any already running app.
    stop_app();
    let arg;
    if (dev) {
        arg = "start:dev";
    } else {
        arg = "start";
    }
    const child = child_process.spawn("yarn", [arg], {
        detached: true,
        stdio: ["ignore", "ignore", "ignore"],
    });
    child.unref();
    save_pid(child.pid);
};

const stop_app = () => {
    try {
        const pid = get_pid();
        process.kill(-pid);
    } catch (_) {}
};

const get_base_filepath = () => {
    return path.join(expandTilde("~"), "/", ".groovify");
};

const get_pid_filepath = () => {
    const base_filepath = get_base_filepath();
    return path.join(base_filepath, "pid.txt");
};

const check_and_create_base_filepath = () => {
    const base_filepath = get_base_filepath();
    if (!fs.existsSync(base_filepath)) {
        fs.mkdirSync(base_filepath);
    }
};

const save_pid = (pid) => {
    check_and_create_base_filepath();
    const pid_filepath = get_pid_filepath();
    fs.writeFileSync(pid_filepath, pid.toString());
};

const get_pid = () => {
    check_and_create_base_filepath();
    const pid_filepath = get_pid_filepath();
    const pid = fs.readFileSync(pid_filepath, { encoding: "utf8", flag: "r" });
    return parseInt(pid);
};

program
    .command("start-app")
    .description("Starts the app server")
    .action(() => {
        console.log("Start the app");
        start_app((dev = true));
    });

program
    .command("stop-app")
    .description("Stops the app server")
    .action(() => {
        console.log("Stop the app");
        stop_app();
    });

program
    .command("play")
    .argument("<query>")
    .description("Plays a song for the given 'query'")
    .action((query) => {
        server.post("/play").then((res) => {
            console.log("res =", res);
        });
    });

program.parse();
