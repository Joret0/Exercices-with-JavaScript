function scopeToHTML(input) {
    let array = JSON.parse(input);
    let html = "<table>\n  <tr><th>name</th><th>score</th></tr>\n"

    for (let obj of array) {
        html += `  <tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }
    html += "</table>";

    console.log(html);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

scopeToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');