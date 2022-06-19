const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd.js');

console.log(isOddOrEven('aaa'));

describe('testing isOddOrEven',()=>{
    it('test with number input',()=>{
        expect(isOddOrEven(4)).to.be.undefined;
    })
    it('test with empty input',()=>{
        expect(isOddOrEven()).to.be.undefined;
    })
    it('test with array input',()=>{
        expect(isOddOrEven([])).to.be.undefined;
    })
    it('test with odd-length string',()=>{
        expect(isOddOrEven('odd')).to.be.equal('odd');
    })
    it('test with even-length string',()=>{
        expect(isOddOrEven('even')).to.be.equal('even');
    })
    it('test with long string',()=>{
        expect(isOddOrEven('evenaa')).to.be.equal('even');
    })
    it('test with long string',()=>{
        expect(isOddOrEven('bbbbasd')).to.be.equal('odd');
    })
    it('test with long string',()=>{
        expect(isOddOrEven('123')).to.be.equal('odd');
    })
})