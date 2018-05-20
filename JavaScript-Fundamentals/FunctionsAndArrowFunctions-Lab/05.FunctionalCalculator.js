function funcCalculator(a, b, operator) {
    switch (operator) {
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
    }
}

funcCalculator(2, 4, '+');