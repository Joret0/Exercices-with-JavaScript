function multiplicationTable(n) {
    console.log(`<table border="1">`);
    let output = `<tr><th>x</th>`;
    let cons = 0;
    for (let i = 1; i <= n; i++) {
       output += `<th>${i}</th>`;
    }
    output += `</tr>\n`;
    for (let i = 1; i <= n; i++) {
        output += `<tr><th>${i}</th>`;
        cons = i;
        for (let j = 1; j <= n; j++) {
            output += `<td>${cons}</td>`;
            cons += i;
        }
        if (i === n) {
            output += `</tr>`;
        } else {
            output += `</tr>\n`;
        }
    }
    console.log(output);
    console.log(`</table>`);
}

multiplicationTable(5);