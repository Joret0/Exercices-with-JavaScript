function matchAllWords(input) {
    let result = input.split(/\W/).filter(e => e !== '');
    console.log(result.join("|"));
}

matchAllWords('_(Underscores) are also word characters');