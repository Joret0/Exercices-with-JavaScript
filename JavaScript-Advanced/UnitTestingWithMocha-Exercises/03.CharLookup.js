function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

let expect = require("chai").expect;

describe("find char at index", function () {
    it('should return undefined for 22,2', function () {
        expect(lookupChar(22, 2)).to.be.undefined;
    });
    it('should return undefined for "JavaScript", "JSCORE"', function () {
        expect(lookupChar("JavaScript", "JSCORE")).to.be.undefined;
    });
    it('should return undefined for floating point number', function () {
        expect(lookupChar("georgi", 1.2)).to.be.undefined;
    });
    it('should return incorrect index for "worldCup"', function () {
        expect(lookupChar("worldCup", 8)).to.be.equal("Incorrect index");
    });
    it('should return incorrect index for "Georgi", -1', function () {
        expect(lookupChar("Georgi", -1)).to.be.equal("Incorrect index");
    });
    it('should return char "K" for "Kamenica", 0', function () {
        expect(lookupChar("Kamenica", 0)).to.be.equal("K");
    });
    it('should return char "i", from "Georgi", 5', function () {
        expect(lookupChar("Georgi",5)).to.be.equal("i");
    });
});