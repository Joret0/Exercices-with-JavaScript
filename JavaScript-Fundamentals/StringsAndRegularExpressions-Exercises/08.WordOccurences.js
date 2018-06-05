function wordOccurence(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, "gi");
    let result = text.match(pattern);
    console.log(result ? result.length : 0);
}

wordOccurence('The waterfall was so high, that the child couldn’t see its peak.', 'the');