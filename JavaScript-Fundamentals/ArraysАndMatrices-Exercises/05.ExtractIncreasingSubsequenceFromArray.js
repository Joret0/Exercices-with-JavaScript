function extractSubSequence(input) {
    let num = 0;
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (num <= input[i]) {
            num = input[i];
            array.push(num);
        }
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

extractSubSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
