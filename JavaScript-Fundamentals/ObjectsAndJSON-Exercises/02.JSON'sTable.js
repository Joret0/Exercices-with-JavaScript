function jsonTable(input) {
    let html = "<table>\n";

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    for (let line of input) {
        let obj = JSON.parse(line);
        html += "  <tr>\n";
        html += `    <td>${htmlEscape(obj.name)}</td>\n`;
        html += `    <td>${htmlEscape(obj.position)}</td>\n`;
        html += `    <td>${Number(obj.salary)}</td>\n`;
        html += "  <tr>\n"
    }

    html += "</table>\n";
    console.log(html);
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);