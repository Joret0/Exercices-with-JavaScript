function censorship(text, words) {
    for (let word of words) {
        let symbols = '-'.repeat(word.length);
        while (text.indexOf(word) > -1) {
            text = text.replace(word, symbols);
        }
    }
    console.log(text);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);