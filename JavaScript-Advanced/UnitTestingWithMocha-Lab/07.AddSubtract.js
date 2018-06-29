function createCalculator() {
    let value = 0;

    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let expect = require("chai").expect;
describe('functions of calculator', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('should return sum of 2 and 5', function () {
        calc.add(2);
        calc.add(5);
        expect(calc.get()).to.be.equal(7);
    });
    it('should return 10', function () {
        calc.add(20);
        calc.subtract(10);
        expect(calc.get()).to.be.equal(10);
    });
    it('should return -20', function () {
        calc.subtract(10);
        calc.subtract(10);
        expect(calc.get()).to.be.equal(-20);
    });
    it('should return -20', function () {
        calc.add(-10);
        calc.subtract(10);
        expect(calc.get()).to.be.equal(-20);
    });
    it('should return 0', function () {
        calc.add(-10);
        calc.subtract(-10);
        expect(calc.get()).to.be.equal(0);
    });
    it('should return 20', function () {
        calc.subtract(-10);
        calc.subtract(-10);
        expect(calc.get()).to.be.equal(20);
    });
    it('should return 20', function () {
        calc.add("10");
        calc.subtract("-10");
        expect(calc.get()).to.be.equal(20);
    });
    it('should return undefined for text', function () {
        calc.add("pesho");
        expect(calc.get()).to.be.NaN
    });
    it('should return 0 for an empty string', function () {
        calc.add([]);
        expect(calc.get()).to.be.equal(0)
    });
});