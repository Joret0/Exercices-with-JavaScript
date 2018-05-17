
function letterOccurrencesInString(args) {

    let word = args[0];
    let letter = args[1];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let obj = word[i];
        if (letter === obj) {
            count++;
        }
    }
    console.log(count);
}

letterOccurrencesInString(["hello", "l"]);