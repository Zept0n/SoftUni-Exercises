function solve(arr) {
    arr.sort((a,b)=>a-b);
    let resultArray=[];
    for (let index=Math.floor(arr.length/2);index<arr.length;index++) {
        resultArray.push(arr[index]);
    }
    return resultArray;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
