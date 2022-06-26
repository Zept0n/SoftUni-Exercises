class Person {
    constructor(fname,lname,age,email) {
        this.firstName=fname,
        this.lastName=lname,
        this.age=age,
        this.email=email
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());


module.exports={Person}