function picolo(input) {
    let resultSet=new Set();
    let end=input.length;
    for(let index=0;index<end;index++){
        let tokens=input[index].split(", ");
        if (tokens[0]==="IN"){
            resultSet.add(tokens[1]);
        } else {
            resultSet.delete(tokens[1]);
        }
    }
    if(resultSet.size===0){
        console.log("Parking Lot is Empty")
    }
    else {
        Array.from(resultSet).sort().forEach(element => console.log(element));
    }
}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

console.log("---------------")
picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);