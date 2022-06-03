function sequence(n, k) {
    let resultArray = [];
    let sum = 0;
    resultArray.push(1)
    for (let i = 0; i < n; i++) {
        let tempK = k;

        for (let j = startIndex; j < i; j++)
        {
            sum += array[j];
        }
        resultArray.push(sum);
    }
    console.log(resultArray);
}


/* function lastKNumbers(n, k) {

    let result = [1];

    for(let i = 1; i < n; i++){

        result[i] = sumLastK(result, k);

    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for(let i = 1; i <= k; i++){

            sum += array[array.length - i];

        }

        return sum;

    }

    return result;

}
 */

sequence(6, 3);
sequence(8, 2);
