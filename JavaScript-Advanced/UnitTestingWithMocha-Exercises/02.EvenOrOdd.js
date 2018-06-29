function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

let expect = require("chai").expect;

describe("Even or odd string length", (() => {
    it('should return undefined for int input', function () {
        expect(isOddOrEven(5)).to.be.undefined;
    });
    it('should return even for empty string', function () {
        expect(isOddOrEven("")).to.be.equal("even");
    });
    it('should return odd for "3.144"', function () {
        expect(isOddOrEven("3.144")).to.be.equal("odd");
    });
}));