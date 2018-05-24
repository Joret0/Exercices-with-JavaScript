function templateFormat(args) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`)
    for (let i = 0; i < args.length; i+=2) {
        let question = args[i];
        let answer = args[i + 1];
        let result = `  <question>\n` +
            `    ${question}\n` +
            `  </question>\n` +
            `  <answer>\n` +
            `    ${answer}\n` +
            `  </answer>`;
        console.log(result);
    }
    console.log(`</quiz>`)
}

templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);