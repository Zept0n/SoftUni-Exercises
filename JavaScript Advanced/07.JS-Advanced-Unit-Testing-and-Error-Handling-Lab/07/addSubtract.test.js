const {createCalculator}=require('./addSubtract')
const {expect} =require('chai');

describe('test suite',()=> {
    it('return a module(object)',()=>{
        expect(createCalculator()).to.be.a('object');
    });
    it('testing add function',()=>{
        expect(createCalculator().add).to.be.a('function');
    });
    it('testing subtract function',()=>{
        expect(createCalculator().subtract).to.be.a('function');
    });
    it('testing get function',()=>{
        expect(createCalculator().get).to.be.a('function');
    });


    let calc = createCalculator();
 
    it('Add to parse string number', () => {
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
 
    it('Subtract to parse string number', () => {
        calc.subtract('2');
        expect(calc.get()).to.equal(-1);
    });
 
    it('Add a number', () => {
        calc.add(2);
        expect(calc.get()).to.equal(1);
    });
 
    it('Subtract a number', () => {
        calc.subtract(2);
        expect(calc.get()).to.equal(-1);
    });
 
    it('Add a number', () => {
        calc.add(2);
        expect(calc.get()).to.equal(1);
    });
 
    it('Return the value', () => {
        expect(typeof calc.get()).to.equal('number');
        expect(calc.get()).to.equal(1);
    });
 
    it('String params to return NaN', () => {
        let calc = createCalculator();
        calc.add('string');
        expect(calc.get()).to.be.NaN;
    })
});