import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    
    let prev = __dirname + '/files/wrongFilename.txt';
    let curr = __dirname + '/files/properFilename.md'

    if (!fs.existsSync(prev) || fs.existsSync(curr)) {
        throw new Error('FS operation failed')
    }
    fs.rename(prev, curr, function(err) {
        if ( err ) console.log('ERROR: ' + err)});
};

rename();