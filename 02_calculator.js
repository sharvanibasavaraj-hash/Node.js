const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Enter operator (+, -, *, /): ", (op) => {

            a = Number(a);
            b = Number(b);

            switch (op) {
                case "+":
                    console.log("Result:", a + b);
                    break;
                case "-":
                    console.log("Result:", a - b);
                    break;
                case "*":
                    console.log("Result:", a * b);
                    break;
                case "/":
                    console.log(b !== 0 ? a / b : "Cannot divide by zero");
                    break;
                default:
                    console.log("Invalid operator");
            }

            rl.close();
        });
    });
});s