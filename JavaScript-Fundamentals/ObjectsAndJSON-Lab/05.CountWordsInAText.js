function countWords(input) {
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w !== '');
    let count = {};
    for (let w of words) {
        count[w] ? count[w]++ : count[w] = 1;
    }
    console.log(JSON.stringify(count));
}

countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);