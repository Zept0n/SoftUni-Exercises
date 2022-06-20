const {expect} =require('chai');
const {isSymmetric}=require('./symmetry');

describe('Symmetry Checker',()=> {
    it('works with symmetric numeric array',()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });
    it('returns false for non-symmetric numeric array',()=>{
        expect(isSymmetric([1,2,3,1])).to.be.false;;
    });
    it('works with odd numeric array',()=>{
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it('works with odd non-symmetric numeric array',()=>{
        expect(isSymmetric([1,2,3])).to.be.false;
    });
    it('works with odd string array',()=>{
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });
    it('doesnt work with a number input',()=>{
        expect(isSymmetric(4)).to.be.false;
    });
    it('doesnt work with a string input',()=>{
        expect(isSymmetric('dsds')).to.be.false;
    });
    it('element of array type mismatch',()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
});