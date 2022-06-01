function solve(arr) {
    let biggestElement=Number(arr[0][0]);
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            if(Number(arr[i][j])>biggestElement) {
                biggestElement=arr[i][j];
            }
        }
    }
    console.log(biggestElement);
}

solve([
    [20, 50, 10],
    [8, 33, 145]]
);
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);
