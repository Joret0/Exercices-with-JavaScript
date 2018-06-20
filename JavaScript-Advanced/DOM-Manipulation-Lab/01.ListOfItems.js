function addItem() {
    let item = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    li.textContent = item;
    let ul = document.getElementById("items");
    ul.appendChild(li);
    document.body.appendChild(ul);
    document.getElementById("newItemText").value = "";
}