function create(sentences) {
    for (let i = 0; i < sentences.length; i++) {
        let para = document.createElement("p");
        para.textContent = sentences[i];
        para.style.display = "none";

        let div = document.createElement("div");
        div.appendChild(para);
        div.addEventListener("click", function () {
            para.style.display = "block";
        });
        document.getElementById("content").appendChild(div);
    }
}