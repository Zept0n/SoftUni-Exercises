class Hex {
    constructor(value) {
        this.value=value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        //converting from decimal to hex
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(number) {
        return new Hex(this.valueOf()+number.valueOf());
    }
    minus(number) {
        return new Hex(this.valueOf()-number.valueOf());
    }
    parse(string) {
        //converting from hex to decimal
        return parseInt('0x'+string);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA')); 
