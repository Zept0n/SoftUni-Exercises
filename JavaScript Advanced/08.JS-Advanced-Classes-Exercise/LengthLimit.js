class Stringer {
    constructor(string,length) {
        this.innerString=string;
        this.innerLength=length;
        this.dots='';
    }
    decrease(length) {
        this.innerLength-=length;
        if (this.innerLength<0) {
            this.innerLength=0;
        }
        if (this.innerString.length>this.innerLength) {
            this.dots="...";
        } else {
            this.dots='';
        }
    }
    increase(length){
        this.innerLength+=length;
        if (this.innerString.length>this.innerLength) {
            this.dots="...";
        } else {
            this.dots='';
        }
    }
    toString(){
        return this.innerString.slice(0,this.innerLength)+this.dots;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
