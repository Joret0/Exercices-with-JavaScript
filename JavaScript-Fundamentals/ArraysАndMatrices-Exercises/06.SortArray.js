function sortArray(input) {
    input.sort((a, b) => {
        if (a.length === b.length) {
            let x = a.toUpperCase(), y = b.toUpperCase();
            return x < y ? -1 : x > y ? 1 : 0;
        }
        if (a.length > b.length) {
            return 1;
        }
        if (a.length < b.length) {
            return -1;
        }
    });

    console.log(input.join("\n"));
}

sortArray(['test', 'Deny', 'omen', 'Default']);