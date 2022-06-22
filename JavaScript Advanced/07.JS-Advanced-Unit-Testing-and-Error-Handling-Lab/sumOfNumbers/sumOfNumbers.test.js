const { sum } = require('./sumOfNumbers');
const { expect } = require('chai');
//console.log(sum([2, 5]))
describe('Test suite', () => {
    it('works with positive integers', () => {
        expect(sum([2,5])).to.equal(7);
    });
    it('works with floating point numbers', () => {
        expect(sum([2.2,2.2])).to.equal(4.4);
    });
})

describe('Test suite2', () => {
    it('wers', () => {
        expect(sum([3, 5])).to.equal(1,'did not work with 2 and 5');
    });
})
