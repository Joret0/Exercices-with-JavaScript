function extractText(input) {
    let result = [];
    let startIndex = input.indexOf('(');
    let endIndex = input.indexOf(')', startIndex);
    while (startIndex > -1 && endIndex > -1) {
        let string = input.substring(startIndex + 1, endIndex);
        result.push(string);
        startIndex = input.indexOf('(', endIndex);
        endIndex = input.indexOf(')', startIndex);
    }
    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');