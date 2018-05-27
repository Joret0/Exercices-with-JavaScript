function biggestElement(input) {
    let number = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > number) {
                number = input[i][j];
            }
        }
    }
    console.log(number);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);