import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { deepStrictEqual } from 'assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    let fileToRemove = __dirname + '/files/fileToRemove.txt'

    if (!fs.existsSync(fileToRemove)) {
        throw new Error('FS operation failed')
    }
    fs.unlink(fileToRemove, (err) => {
        if (err) {
            throw err;
        }
    })
};

remove();
