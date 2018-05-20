function rounding(args) {

    let precision = args[1];
    if (precision > 15) {
        precision = 15;
    }
    console.log(Number(args[0].toFixed(precision)));
}

rounding([3.1415926535897932384626433832795, 2]);