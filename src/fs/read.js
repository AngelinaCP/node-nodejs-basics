import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    let srcDir = __dirname + '/files'

    if (!fs.existsSync(srcDir)) {
        throw new Error('FS operation failed')
    }
    
    let files = fs.readdirSync(srcDir)
    files.forEach(file => {
        console.log(file);
    })
};

read();