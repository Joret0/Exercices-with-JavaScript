function search() {
    let input = $("#searchText").val();
    let elements = $(`ul#towns li:contains(${input})`);
    elements.css("font-weight", "bold");
    $(`ul#towns li:not(:contains(${input}))`).css("font-weight", "");
    $("#result").text(elements.length + " matches found");
}