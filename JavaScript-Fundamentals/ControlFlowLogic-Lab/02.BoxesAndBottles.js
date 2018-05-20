function boxesAndBottles(num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);
    let result = Math.ceil(firstNumber / secondNumber);
    console.log(result)
}

boxesAndBottles(5, 10);