function gradsToRadians(args) {
    let degree = 0.9 * args;

    while (degree < 0 || degree >= 360) {
        if (degree < 0) {
            degree = 360 - Math.abs(degree);
        } else {
            degree = degree - 360;
        }
    }
    console.log(degree);
}

gradsToRadians(90);