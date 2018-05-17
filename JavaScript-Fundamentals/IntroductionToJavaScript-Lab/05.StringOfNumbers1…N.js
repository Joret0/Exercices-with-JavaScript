function stringOfNumbers(args) {
    let number = Number(args);
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    console.log(result);
}

stringOfNumbers(11);