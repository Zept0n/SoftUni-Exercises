const { expect } = require('chai');
const { lookupChar } = require('./charLookup.js');

describe('testing lookupChar',()=>{
    it('return undefined for second parameter string',()=>{
        expect(lookupChar('asd',"2")).to.be.undefined;
    })
    it('two numbers',()=>{
        expect(lookupChar(2,0)).to.be.undefined;
    })
    it('return undefined for first parameter number',()=>{
        expect(lookupChar(2,"asd")).to.be.undefined;
    })
    it('return undefined for first parameter float',()=>{
        expect(lookupChar(2.2,"asd")).to.be.undefined;
    })
    it('return undefined for second parameter float',()=>{
        expect(lookupChar('asd',1.2)).to.be.undefined;
    })
    it('return undefined for empty input',()=>{
        expect(lookupChar()).to.be.undefined;
    })
    it('return undefined for missing parameter',()=>{
        expect(lookupChar('test')).to.be.undefined;
    })
    it('return undefined for missing parameter',()=>{
        expect(lookupChar([],{})).to.be.undefined;
    })
    it('return "Incorrect index" for index bigger than string length',()=>{
        expect(lookupChar('asd',4)).to.be.equal('Incorrect index');
    })
    it('return "Incorrect index" for negative',()=>{
        expect(lookupChar('asd',-1)).to.be.equal('Incorrect index');
    })
    it('return "Incorrect index" for index the same as the string length',()=>{
        expect(lookupChar('asd',3)).to.be.equal('Incorrect index');
    })
    it('check with correct parameters',()=>{
        expect(lookupChar('asd',2)).to.be.equal('d');
    })
    it('check with correct parameters',()=>{
        expect(lookupChar('asd',0)).to.be.equal('a');
    })
    it('check with correct parameters',()=>{
        expect(lookupChar('0123456789012345',5)).to.be.equal('5');
    })
})