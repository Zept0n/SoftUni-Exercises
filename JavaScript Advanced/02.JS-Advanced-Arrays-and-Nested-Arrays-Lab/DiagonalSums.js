function solve(arr) {
    let firstDiagonalSum=0;
    let secondDiagonalSum=0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            
        }
        firstDiagonalSum+=arr[i][i];
        secondDiagonalSum+=arr[arr.length-1-i][i];
    }
    console.log(firstDiagonalSum+" "+secondDiagonalSum);
}   

/* if (rowIndex === matrix.length-1) {
    isLastRow=true;
}
if (colIndex === matrix[rowIndex].length-1) {
    isLastColumn=true;
} */
    
solve([
    [20, 40],
    [10, 60]]
);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
