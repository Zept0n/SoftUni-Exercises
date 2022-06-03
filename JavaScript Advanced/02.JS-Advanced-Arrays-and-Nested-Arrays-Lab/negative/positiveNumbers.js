function solve(arr) {
    let resultArr=[];
    for(let i=0;i<arr.length;i++) {
        if (arr[i]<0) {
            resultArr.unshift(arr[i]);
        } else {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join("\n"))
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
