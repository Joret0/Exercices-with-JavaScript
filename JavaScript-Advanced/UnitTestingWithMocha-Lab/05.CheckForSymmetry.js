function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;
describe("isSymmetric(arr)", function () {
    it('should return false for not array', function () {
        expect(isSymmetric(1)).to.be.false;
    });
    it('should return true for [1,2,1]', function () {
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it('should return false for [1,2,3]', function () {
        expect(isSymmetric([1,2,3])).to.be.false;
    });
    it('should return true for [1,2,"",2,1]', function () {
        expect(isSymmetric([1,2,"",2,1])).to.be.equal(true);
    });
    it('should return true for ["true"]', function () {
        expect(isSymmetric(["true"])).to.be.equal(true);
    });
    it('should return false from ["1",2,3,"2",1]', function () {
        expect(isSymmetric(["1", 2, 3, "2", 1])).to.be.equal(false);
    });
});

