function distanceOverTime(args) {
    let hours = args[2] / 60 / 60;
    let firstDistance = args[0] * hours;
    let secondDistance = args[1] * hours;
    let result = Math.abs(firstDistance - secondDistance) * 1000;
    console.log(result);
}

distanceOverTime([0, 60, 3600]);