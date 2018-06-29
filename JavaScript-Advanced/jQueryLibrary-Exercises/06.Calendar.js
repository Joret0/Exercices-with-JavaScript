function calendar([day, month, year]) {
    let date = new Date(`${month}, ${day}, ${year}`);
    let locate = "en-us";
    let captionMonth = date.toLocaleString(locate, {month: "long"});

    $("<table>")
        .append($("<caption>").text(`${captionMonth} ${date.getFullYear()}`))
        .append($("<tbody>").append($("<tr>")))
        .appendTo($("#content"));
}