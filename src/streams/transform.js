import {Transform} from 'stream'

export const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push([...chunk.toString()].reverse().join(""))
            callback()
        }
    })
    process.stdin.pipe(reverseStream).pipe(process.stdout)
    process.stdin.resume();
};

transform();