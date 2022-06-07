
export const parseEnv = () => {
    const envir = process.env;
    var array = [];

    for (let one in envir) {
        if (one.startsWith('RSS_')) {
            array.push(one + '=' + envir[one] + ';');
        }
    }
    console.log(array.join('; '))
};

parseEnv();
