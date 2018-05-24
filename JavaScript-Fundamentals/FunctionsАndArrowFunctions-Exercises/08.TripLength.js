function tripLength([x1, y1, x2, y2, x3, y3]) {
    let pointOne = {x: x1, y: y1};
    let  pointTwo = {x: x2, y: y2};
    let pointThree = {x: x3, y: y3};

    let pointOneToPointTwo = distanceBetweenPoints(pointOne, pointTwo);
    let pointTwoToPointThree = distanceBetweenPoints(pointTwo, pointThree);
    let pointOneToPointThree = distanceBetweenPoints(pointOne, pointThree);

    if (pointOneToPointTwo + pointTwoToPointThree <= pointTwoToPointThree + pointOneToPointThree) {
        console.log(`1->2->3: ${pointOneToPointTwo + pointTwoToPointThree}`);
    } else if (pointOneToPointTwo + pointOneToPointThree < pointTwoToPointThree + pointOneToPointThree) {
        console.log(`2->1->3: ${pointOneToPointTwo + pointOneToPointThree}`);
    } else {
        console.log(`1->3->2: ${pointTwoToPointThree + pointOneToPointThree}`);
    }

    function distanceBetweenPoints(pointOne, pointTwo) {
        let distance = Math.sqrt(Math.pow(pointOne.x - pointTwo.x, 2) + Math.pow(pointOne.y - pointTwo.y, 2));
        return distance;
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);