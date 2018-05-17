function solve(args) {
    let words = args
        .join('')
        .split(/\W+/)
        .filter(w => w.length > 0)
        .filter(w => w === w.toUpperCase())
        .join(', ');

    console.log(words);
}

solve([
    'Some text JAVA TEXT note HOME',
    'again TEXT BRING CCCC BULGARIA',
    'Berlin GERMANY THINK WHAT TO DO maybe not'
]);