function palindrome(word) {
    let firstPart = word.substr(0, word.length / 2);
    firstPart = firstPart.split("").reverse().join("");
    let secondPart;
    if (word.length % 2 === 0) {
        secondPart = word.substr(word.length / 2);
    } else {
        secondPart = word.substr(word.length / 2 + 1);
    }

    if (firstPart === secondPart) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindrome("haah");