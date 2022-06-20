const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer.js');

describe('testing mathEnforcer', () => {

    describe('testing mathEnforcer.addFive', () => {

        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.addFive('2')).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        })

        it('return correct values with numbers', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.addFive(5.55)).closeTo(10.55,0.01);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        })

    })
    describe('testing mathEnforcer.subtractTen', () => {

        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        })

        it('return correct values with numbers', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        })

        it('return correct values with numbers', () => {
            expect(mathEnforcer.subtractTen(3.14)).closeTo(6.86,0.01);
        })


    })
    describe('testing mathEnforcer.sum', () => {

        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.sum(15,'15')).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.sum("15",15)).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.sum("asd",15)).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.sum(15,'asd')).to.be.undefined;
        })
        it('return undefined with non-numbers', () => {
            expect(mathEnforcer.sum("",20)).to.be.undefined;
        })

        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(15,5)).to.equal(20);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(-10,-2.5)).to.equal(-12.5);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(-5,10)).to.equal(5);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(10,-5)).to.equal(5);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(2.2,2.2)).to.closeTo(4.4,0.01);
        })
        it('return correct values with numbers', () => {
            expect(mathEnforcer.sum(3.3,3.3)).to.closeTo(6.6,0.01);
        })
    })
})