function getFibonator() {
    let first=0;
    let last=1;
    return ()=> {
        const next=first+last;

        first=last;
        last=next;
        return first;
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
