export const parseArgs = () => {
    var array = [];

    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i++) {
        array.push(args[i] + ' is ' + args[++i]);
    }
    console.log(array.join(', '));
};

parseArgs();
