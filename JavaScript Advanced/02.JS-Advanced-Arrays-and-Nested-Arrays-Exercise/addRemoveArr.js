function solve(arr) {
    let number=1;
    let resultArray=[];
    for(let index=0;index<arr.length;index++) {
        let currentCommand=arr[index];
        if (currentCommand==="add") {
            resultArray.push(number);
        } else if (currentCommand==="remove") {
            resultArray.pop()
        }
        number++;
    }
    if (resultArray.length<1) {
        console.log("Empty")
    } else {
        console.log(resultArray.join("\n"));
    }
}

solve(['add',
    'add',
    'add',
    'add']

);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);
