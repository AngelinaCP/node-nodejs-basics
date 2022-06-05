import zlib from 'zlib'
import fs from 'fs';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dest = __dirname + '/files/fileToCompress.txt'
const src = __dirname + '/files/archive.gz'
var zip = zlib.createGzip();

var inStream = fs.createReadStream(src)
var outStream = fs.createWriteStream(dest)
var unzip = zlib.createGunzip();

export const decompress = async () => {
    inStream.pipe(unzip).pipe(outStream);
};

decompress();