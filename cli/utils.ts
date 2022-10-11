import * as fs from "fs";
import axios from "axios";
import path from "path";
import expandTilde from "expand-tilde";

export const server = axios.create({
    baseURL: "http://127.0.0.1:3000",
});

const getBaseFilepath = () => {
    return path.join(expandTilde("~"), "/", ".groovify");
};

const getPidFilepath = () => {
    const base_filepath = getBaseFilepath();
    return path.join(base_filepath, "pid.txt");
};

const checkAndCreateBaseFilepath = () => {
    const base_filepath = getBaseFilepath();
    if (!fs.existsSync(base_filepath)) {
        fs.mkdirSync(base_filepath);
    }
};

export const savePid = (pid: number) => {
    checkAndCreateBaseFilepath();
    const pid_filepath = getPidFilepath();
    fs.writeFileSync(pid_filepath, pid.toString());
};

export const getPid = () => {
    checkAndCreateBaseFilepath();
    const pid_filepath = getPidFilepath();
    const pid = fs.readFileSync(pid_filepath, { encoding: "utf8", flag: "r" });
    return parseInt(pid);
};
