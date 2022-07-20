import path from 'path';
import expandTilde from 'expand-tilde';
import fs from 'fs';

export const get_base_filepath = () => {
    return path.join(expandTilde("~"), "/", ".groovify");
};

export const check_and_create_base_filepath = () => {
    const base_filepath = get_base_filepath();
    if (!fs.existsSync(base_filepath)) {
        fs.mkdirSync(base_filepath);
    }
};
