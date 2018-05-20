function wordsUpper(args) {
    let upper = args.toUpperCase();
    let words = upper.split(/\W+/);
    words = words.filter(w => w !== "");
    console.log(words.join(", "));
}

wordsUpper('Hi, how are you?');