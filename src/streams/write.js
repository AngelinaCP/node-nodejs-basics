import fs from 'fs';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dest = __dirname + '/files/fileToWrite.txt'

export const write = async () => {
    var writeableStream = fs.createWriteStream(dest)
    process.stdin.on('readable', () => {
        let chunk;
        while ((chunk = process.stdin.read()) !== null) {
         writeableStream.write(chunk);
        }
      });
};

write();