function solve(arr, n) {
   /*  let resultArray=[];
    for(let index=0;index<arr.length;index+=n) {
        resultArray.push(arr[index]);
    }
    return resultArray;
 */
    return arr.filter((element,index)=>index%n==0);

/* 
    newArr = arr.filter(function(value, index, Arr) {
        return index % n == 0;
    });
    console.log(newArr) */
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
solve(['dsa',
    'asd',
    'test',
    'tset'],
    2

);
solve(['1',
    '2',
    '3',
    '4',
    '5',],
    6
);
