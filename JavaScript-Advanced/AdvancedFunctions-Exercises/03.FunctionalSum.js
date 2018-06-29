function solve() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }
    add.toString = function () {
        return sum;
    };
    return add;
}

let result = solve();
console.log(result(1)(6)(-3).toString());