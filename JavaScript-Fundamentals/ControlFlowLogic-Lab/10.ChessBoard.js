function chessBoard(number) {
    console.log('<div class="chessboard">');
    for (let i = 0; i < number; i++) {
        console.log("<div>");
        let color;
        if (i % 2 === 0) {
            color = "black";
        } else {
            color = "white";
        }
        for (let j = 0; j < number; j++) {
            console.log(`<span class="${color}"></span>`);
            if (color === "white") {
                color = "black";
            } else {
                color = "white";
            }
        }
        console.log("</div>")
    }
    console.log("</div>")
}

chessBoard(3);