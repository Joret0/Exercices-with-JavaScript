function magicMatrix(input) {
    let sum = input[0].reduce((a, b) => a + b);

    for (let i = 1; i < input.length; i++) {
        if (sum !== input[i].reduce((a,b) => a+b)) return false;
    }
    for (let col = 0; col < input[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < input.length; row++) {
            colSum += input[row][col];
        }
        if (sum !== colSum) return false;
    }
    return true;
}

console.log(magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));