import fs from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = __dirname + '/files'
const destDir = __dirname + '/files_copy'

export const copy = async () => {
    if (!fs.existsSync(srcDir) || fs.existsSync(destDir)) {
        throw new Error('FS operation failed')
    }
    fs.mkdirSync(destDir)
    let files = fs.readdirSync(srcDir)
    files.forEach(file => {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    })
   
};

copy();