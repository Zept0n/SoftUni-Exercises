const {rgbToHexColor}=require('./RGBtoHex')
const {expect} =require('chai');

describe('test suite',()=> {
    it('works with integers-upperbound-black',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('works with integers-lowerbound-white',()=>{
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it('random colour',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('out of range check',()=>{
        expect(rgbToHexColor(256,256,256)).to.equal(undefined);
    });
    it('out of range check',()=>{
        expect(rgbToHexColor(-1,-1,-1)).to.equal(undefined);
    });
    it('type checks',()=>{
        expect(rgbToHexColor('-1',-1,-1)).to.equal(undefined);
    });
    it('type checks',()=>{
        expect(rgbToHexColor('123fasd')).to.equal(undefined);
    });
    it('type checks',()=>{
        expect(rgbToHexColor(4)).to.equal(undefined);
    });
    it('undefined for missing parameters',()=>{
        expect(rgbToHexColor(0,0)).to.equal(undefined);
        expect(rgbToHexColor(0)).to.equal(undefined);
        expect(rgbToHexColor()).to.equal(undefined);
    });
});