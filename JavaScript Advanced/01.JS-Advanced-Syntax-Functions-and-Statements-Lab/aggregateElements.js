/* function solve(input) {
    let Sum=0;
    let inverseSum=0
    let concString='';
    for (let index=0;index<input.length;index++) {
        Sum+=input[index];
        inverseSum+=1/input[index];
        concString+=input[index];
    }
    console.log(`${Sum}\n${inverseSum}\n${concString}`);
}
solve([1,2,3]);  */


function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

aggregateElements([1, 2, 3]); 