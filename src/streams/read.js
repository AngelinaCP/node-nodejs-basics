import fs from 'fs';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = __dirname + '/files/fileToRead.txt'

export const read = async () => {
    const readable = fs.createReadStream(srcDir, 'utf-8');
    var data = '';
    readable.on('data', function(chunk) {
        process.stdout.write(chunk)
     });
};

read();
