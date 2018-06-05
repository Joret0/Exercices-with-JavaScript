function captureTheNumber(input) {
    let regex = /[0-9]+/g;
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let num = input[i].match(regex);
        if (num !== null) {
            for (let number of num) {
                array.push(number);
            }
        }
    }
    console.log(array.join(' '));
}

captureTheNumber(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);