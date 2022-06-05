import zlib from 'zlib'
import fs from 'fs';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = __dirname + '/files/fileToCompress.txt'
const dest = __dirname + '/files/archive.gz'
var zip = zlib.createGzip();

export const compress = async () => {
    var read = fs.createReadStream(src);
    var write = fs.createWriteStream(dest);
    
    read.pipe(zip).pipe(write);	
};

compress();
