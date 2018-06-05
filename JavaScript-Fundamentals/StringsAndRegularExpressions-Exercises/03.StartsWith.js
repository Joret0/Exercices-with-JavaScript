function startWith(string, substring) {
    let result = '' + string;
    console.log(result.startsWith(substring))
}

startWith('How have you been?', 'how');
startWith('The quick brown fox...', 'The quick brown fox');