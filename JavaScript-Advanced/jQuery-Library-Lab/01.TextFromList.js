function extractText() {
    let array = [];
    $("#items li").each((i, e) => array.push(e.textContent));
    $("#result").text(array.join(", "));
}