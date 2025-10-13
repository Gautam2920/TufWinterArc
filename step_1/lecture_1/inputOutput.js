function printNumber(value) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter a number: ", (value) => {
        console.log(parseInt(value));
        rl.close();
    });
}
