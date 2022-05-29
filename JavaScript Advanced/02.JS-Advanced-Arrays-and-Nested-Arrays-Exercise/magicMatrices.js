function solve(matrix) {
    let sumArray = [];
    for (let index = 0; index < matrix.length; index++) {
        let rowSum = 0;
        let columnSum = 0;
        for (let j = 0; j < matrix[index].length; j++) {
            rowSum += matrix[index][j];
            columnSum += matrix[j][index];
            //console.log(`${index}:${j}`);
        }
        sumArray.push(rowSum);
        sumArray.push(columnSum);
    }
    //console.log(sumArray.every((a,b)=>a==sumArray[0]));
    let firstElement = sumArray[0];
    let isEverySame = true;
    if (sumArray.length == 0) {
        isEverySame = false;
    }
    for (let index = 0; index < sumArray.length; index++) {
        if (firstElement !== sumArray[index]) {
            isEverySame = false;
        }
    }
    console.log(isEverySame)
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);
