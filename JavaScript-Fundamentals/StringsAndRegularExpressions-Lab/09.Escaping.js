function escaping(input) {
    let result = `<ul>\n`;
    for (let i = 0; i < input.length; i++) {
        let text = htmlEscape(input[i]);
        result += `   <li>${text}</li>\n`;
    }
    result += `</ul>\n`;
    console.log(result);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);