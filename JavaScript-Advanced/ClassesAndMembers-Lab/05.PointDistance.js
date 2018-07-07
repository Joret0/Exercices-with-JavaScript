class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let point1 = new Point(5, 5);
let point2 = new Point(10, 10);
console.log(Point.distance(point1, point2));