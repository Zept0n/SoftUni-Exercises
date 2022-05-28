function filter(arr,fn) {
    let result = [];
    for (let element of arr) {
        if (fn(element)==true) {
            result.push(element);
        }
    }
    return result;
}
let arr=[1,2,3,4];
console.log(filter(arr,(x)=>x%2));