function lastKNumbers(n, k) {
    let array = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let num = array.length - k;
        if (num < 0) {
            num = 0;
        }
        for (let j = array.length - 1; j >= num; j--) {
            sum += array[j];
        }
        array.push(sum);
    }

    console.log(array.join(' '));
}

lastKNumbers(8, 2);