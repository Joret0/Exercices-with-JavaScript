function concatenateAndReverse(input) {
    let result = input.join('').split('').reverse().join('');
    console.log(result);
}

concatenateAndReverse(['I', 'am', 'student']);