function triangle(n) {
    let stars = "";
    for (let i = 0; i <= n; i++) {
        stars += "*".repeat(i).concat("\n");
    }
    for (let i = n - 1; i >= 0; i--) {
        stars += "*".repeat(i).concat("\n");
    }
    console.log(stars);
}

triangle(5);