function compoundInterest(args) {
    let p = args[0];
    let i = args[1] / 100;
    let c = args[2];
    let t = args[3];
    let f = 12 / c;
    let result = (p * Math.pow((1 + i / f), f * t)).toFixed(2);
    console.log(result);
}

compoundInterest([1500, 4.3, 3, 6]);