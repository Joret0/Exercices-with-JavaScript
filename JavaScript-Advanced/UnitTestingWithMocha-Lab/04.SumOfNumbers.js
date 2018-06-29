function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require("chai").expect;
describe("sum(arr)", function () {
    it('should return 3 for [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3);
    });
    it('should return NaN for [1, 2, "string"]', function () {
        expect(sum([1, 2, "string"])).to.be.NaN;
    });
    it('should return -3 for [-1,-1,-1]', function () {
        expect(sum([-1, -1, -1])).to.be.equal(-3);
    });
});