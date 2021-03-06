function calendar([day, month, year]) {
    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    let inputDate = new Date(year, month - 1, day);
    let calendarDate = new Date(inputDate);
    calendarDate.setDate(1);
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), (calendarDate.getDate() - calendarDate.getDay()));
    for (let r = 0; r < 6; r++) {   // can't be more than 6 weeks
        if ((calendarDate.getMonth() != inputDate.getMonth()) && calendarDate.getTime() > inputDate.getTime()) {
            continue;
        }
        else {
            html += (r == 0) ? '  <tr>' : '<tr>';
        }
        for (let c = 0; c < 7; c++) {
            if (calendarDate.getTime() === inputDate.getTime()) {
                html += '<td class="today">' + calendarDate.getDate() + '</td>';
            }
            else if ((calendarDate.valueOf() < inputDate.valueOf()) && calendarDate.getMonth() != inputDate.getMonth()) {
                html += '<td class="prev-month">' + calendarDate.getDate() + '</td>';
            }
            else if ((calendarDate.valueOf() > inputDate.valueOf()) && calendarDate.getMonth() != inputDate.getMonth()) {
                html += '<td class="next-month">' + calendarDate.getDate() + '</td>';
            }
            else {
                html += '<td>' + calendarDate.getDate() + '</td>';
            }
            calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate()+1);
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
}

calendar([24, 12, 2012]);