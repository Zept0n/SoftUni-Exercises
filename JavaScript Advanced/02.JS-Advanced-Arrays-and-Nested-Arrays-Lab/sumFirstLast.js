function sum(arr) {
    //return Number(arr[0])+Number(arr[arr.length-1]);
    let sum=0;
    if (arr.length!=1) {
        let first=Number(arr.shift());
        let last=Number(arr.pop())
        sum=first+last;
    } else {
        let first=Number(arr.shift());
        let last=first;
        sum=first+last;
    }
    return sum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));
