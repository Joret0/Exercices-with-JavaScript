function notify(message) {
    let div = document.getElementById("notification");
    div.textContent = message;
    div.style.display = "block";
    setTimeout(hideMsg, 2000);

    function hideMsg() {
        div.style.display = "none";
    }
}