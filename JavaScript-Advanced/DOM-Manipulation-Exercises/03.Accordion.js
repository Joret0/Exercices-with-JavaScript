function toggle() {
    let span = document.getElementsByTagName("span")[0];
    if (span.textContent === "More") {
        span.textContent = "Less";
        document.getElementById("extra").style.display = "block";
    } else {
        span.textContent = "More";
        document.getElementById("extra").style.display = "none";
    }
}