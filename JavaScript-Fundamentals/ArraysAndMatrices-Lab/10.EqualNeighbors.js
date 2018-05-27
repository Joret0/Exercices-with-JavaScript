function equalNeighbors(input) {
    let result = 0;
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === input[i + 1][j]) {
                result++;
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            if (input[i][j] === input[i][j + 1]) {
                result++;
            }
        }
    }
    console.log(result);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);