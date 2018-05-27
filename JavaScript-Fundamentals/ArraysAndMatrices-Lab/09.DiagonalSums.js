function diagonals(input) {
    let sumOne = 0;
    let sumTwo = 0;

    for (let i = 0; i < input.length; i++) {
        sumOne += input[i][i];
        sumTwo += input[i].reverse()[i];
    }
    console.log(`${sumOne} ${sumTwo}`);
}

diagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);

//for (let i = input.length - 1; i >= 0; i--) {
//    sumTwo += input[i][input[i].length - i - 1];
//}