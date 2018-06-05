function jsonToHTML(input) {
    let array = JSON.parse(input);
    let html = '<table>\n  <tr>';
    for (let key of Object.keys(array[0])) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';
    for (let obj of array) {
        html += '  <tr>';
        for (let key in obj) {
            let value = String(obj[key]);
            html += `<td>${escapeHtml(value)}</td>`
        }
        html += '</tr>\n';
    }
    function escapeHtml(text) {
        let keyValues = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return text.replace(/[&<>"']/g, ch => keyValues[ch]);
    }
    html += '</table>';
    console.log(html);
}

jsonToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');