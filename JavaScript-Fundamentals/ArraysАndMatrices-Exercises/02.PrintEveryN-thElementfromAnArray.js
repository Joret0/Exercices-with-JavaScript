function printEveryNElement(input) {
    let n = Number(input[input.length - 1]);
    input.pop();
    for (let i = 0; i < input.length; i+=n) {
        console.log(input[i]);
    }
}

printEveryNElement([5,20, 31, 4, 20, 2]);