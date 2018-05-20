function distanceIn3D(args) {
    let x = Math.pow(args[0] - args[3], 2);
    let y = Math.pow(args[1] - args[4], 2);
    let z = Math.pow(args[2] - args[5], 2);
    let distance = Math.sqrt(x + y + z);
    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);