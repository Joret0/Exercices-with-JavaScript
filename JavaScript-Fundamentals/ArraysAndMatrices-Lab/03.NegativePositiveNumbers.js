function negativePositive(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            array.unshift(input[i]);
        } else {
            array.push(input[i]);
        }
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

negativePositive([7, -2, 8, 9]);