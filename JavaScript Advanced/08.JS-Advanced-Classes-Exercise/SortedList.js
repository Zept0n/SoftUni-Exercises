
//Easier way with an array in every instance of the class.
class List {
    constructor() {
        this.size = 0;
    }
    add(number) {
        if (typeof number != 'number') {
            throw new TypeError('Must add a number');
        }
        this[this.size] = number;
        this.size++;
        this.sort();
    }
    remove(index) {
        if (index >= this.size||index<0) {
            throw new RangeError('Out of range');
        }
        let temp = this[this.size - 1];
        delete this[this.size - 1];
        if (index == this.size - 1 == false) {
            this[index] = temp;
        }
        this.size--;
        this.sort();
    }
    get(index) {
        if (index >= this.size||index<0) {
            throw new RangeError('Out of range');
        }
        return this[index];
    }
    sort() {
        for (let index = 0; index < this.size; index++) {
            //[index,value] of Object.entries(this)
            for (let j = 0; j < this.size; j++) {
                if (this[index] < this[j]) {
                    let temp = this[j];
                    this[j] = this[index];
                    this[index] = temp;
                }
            }
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));


/* for (let [index, value] of Object.entries(list)) {
    console.log(index, value)
} */

var myList = new List();

for (let i = 0; i < 5; i++) {
    myList.add(i);
}

myList.remove(0);

console.log(myList);