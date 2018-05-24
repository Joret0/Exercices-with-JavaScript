function validityChecker(args) {
 let x1 = args[0];
 let x2 = args[2];
 let y1 = args[1];
 let y2 = args[3];

    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    function isValid(distance, x1, y1, x2, y2) {
        let rounded = Math.round(distance);
        if (distance === rounded) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }

    let distancePointOne = findDistance(x1, y1, 0, 0);
    isValid(distancePointOne, x1, y1, 0, 0);

    let distancePointTwo = findDistance(0, 0, x2, y2);
    isValid(distancePointTwo, x2, y2, 0, 0);

    let betweenTwoPoints = findDistance(x1, y1, x2, y2);
    isValid(betweenTwoPoints, x1, y1, x2, y2);
}

validityChecker([2, 1, 1, 1]);