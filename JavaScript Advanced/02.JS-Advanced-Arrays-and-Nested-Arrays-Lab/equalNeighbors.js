function solve(matrix) {
    let counter = 0;
    let isLastRow=false;
    let isLastColumn=false;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        isLastColumn=false;
        for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
            //console.log(matrix[rowIndex][colIndex])
            if (rowIndex === matrix.length-1) {
                isLastRow=true;
            }
            if (colIndex === matrix[rowIndex].length-1) {
                isLastColumn=true;
            }
            if ((isLastRow!=true)&&matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                counter++;
                //console.log(matrix[rowIndex][colIndex] + " === " + matrix[rowIndex + 1][colIndex])
                //.log("counter=" + counter);
            }
            if ((isLastColumn!=true)&&matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                counter++;
                //console.log(matrix[rowIndex][colIndex] + " === " + matrix[rowIndex][colIndex + 1])
                //console.log("counter=" + counter);
            }
        }
    }
    console.log(counter);
}

/* solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]); */

solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, undefined]]);