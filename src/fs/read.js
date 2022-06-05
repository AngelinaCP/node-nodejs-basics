import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    let fileToRead = __dirname + '/files/fileToRead.txt'

    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed')
    }

    fs.readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    })

};

read();