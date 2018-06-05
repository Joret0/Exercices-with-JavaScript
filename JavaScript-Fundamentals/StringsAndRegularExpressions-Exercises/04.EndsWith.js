function endWith(text, end) {
    let string = '' + text;
    console.log(string.endsWith(end));
}

endWith('This sentence ends with fun?', 'fun?');