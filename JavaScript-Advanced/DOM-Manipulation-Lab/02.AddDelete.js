function addItem() {
    let item = document.getElementById("newText").value;
    let li = document.createElement("li");
    li.textContent = item;
    let ul = document.getElementById("items");
    let span = document.createElement("span");
    span.innerHTML = "<a href='#'>[Delete]</a>";
    span.firstChild.addEventListener('click', deleteItem);
    li.appendChild(span);
    ul.appendChild(li);
    document.body.appendChild(ul);
    document.getElementById("newText").value = "";

    function deleteItem() {
        let li = this.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
}