function solve(array) {
    let sorted=array.sort((a,b)=>a-b);
    let resultArray=[];
    while(sorted.length!=0) {
        resultArray.push(sorted.shift());
        resultArray.push(sorted.pop());
    }
    return resultArray
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

