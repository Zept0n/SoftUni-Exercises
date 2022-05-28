function solve(arr) {
     let resultArray = []; 
     let biggestElement = arr[0];
     
    for (let index = 0; index < arr.length; index++) {
        let currentElement = arr[index];
        if (currentElement >= biggestElement) {
            biggestElement = arr[index];
            resultArray.push(biggestElement);
        }

    }
    /* let initialValue=arr[0];
    const resultArray = arr.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, initialValue)

    console.log(resultArray); */
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
solve([1,
    2,
    3,
    4]
);
solve([20,
    3,
    2,
    15,
    6,
    1]
);
