const expect = require('chai').expect;
const isEven = require('../1/1.js');

describe('Testing isEven function', () => {

    it('The number is even', () => {
        expect(isEven(6)).to.be.true;
    });

    it('The number is odd', () => {
        expect(isEven(3)).to.be.false;
    });

    it('The number is zero', () => {
        expect(isEven(0)).to.be.true;
    });

    it('if input value is float', () => {
        expect(() => isEven(1.5)).to.throw('Input number must be an integer');
    });

    it('if input value is string', () => {
        expect(() => isEven('qwerty')).to.throw('Input number must be an integer');
    });

    it('if input value is array', () => {
        expect(() => isEven(['qwerty', 4, null, 5, true])).to.throw('Input number must be an integer');
    });

});