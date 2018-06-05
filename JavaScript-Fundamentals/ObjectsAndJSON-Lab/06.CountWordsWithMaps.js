function countWordsWithMap(input) {
    let words = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]+/).filter(w => w !== '');
    let count = new Map();
    for (let w of words) {
        count.has(w) ? count.set(w, count.get(w) + 1) : count.set(w, 1);
    }
    let allWords = Array.from(count.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${count.get(w)} times`));
}

countWordsWithMap(['JS and Node.js', 'JS again and again', 'Oh, JS?']);