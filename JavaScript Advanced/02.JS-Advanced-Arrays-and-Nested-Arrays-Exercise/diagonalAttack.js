function solve(arr) {
    let firstDiagonalSum=0;
    let secondDiagonalSum=0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            
        }
        firstDiagonalSum+=arr[i][i];
        secondDiagonalSum+=arr[arr.length-1-i][i];
    }
    if (firstDiagonalSum==secondDiagonalSum) {
        console.log("true");
    } else {
        console.log("false");
    }
}   

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);

solve(['1 1 1',
'1 1 1',
'1 1 0']);