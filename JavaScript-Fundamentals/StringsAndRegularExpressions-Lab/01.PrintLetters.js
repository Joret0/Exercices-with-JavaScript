function printLetters(input) {
    let array = input.split('');
    for (let i = 0; i < array.length; i++) {
        console.log(`str[${i}] -> ${array[i]}`);
    }
}

printLetters("Hello, World!");