import { getPid } from "./utils";

export const stop_app = () => {
    try {
        const pid = getPid();
        process.kill(-pid);
    } catch (_) {}
};
