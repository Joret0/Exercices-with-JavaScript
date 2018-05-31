function matchTheDates(input) {
    let dateRegex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;

    for (let sentence of input) {
        while (match = dateRegex.exec(sentence)) {
            let array = match[0].split('-');
            dates.push(`${match[0]} (Day: ${array[0]}, Month: ${array[1]}, Year: ${array[2]})`);
        }
    }
    console.log(dates.join("\n"));
}

matchTheDates(['I am born on 30-Dec-1994.',
        'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.']);