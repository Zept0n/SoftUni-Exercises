function numbers(input) {
    let array = input.split(" ").map(Number);
    let sum = array.reduce(((x, y) => x + y), 0);
    let averageValue = Number((sum / array.length).toFixed(2));
    array=array.filter(x => x > averageValue).sort((x,y)=>y-x);
    if (array.length>0){
        let resultArray=[];
        for(let index=0;index<5;index++) {
            resultArray.push(array.shift());
        }
        console.log(resultArray.join(" "));
    } else {
        console.log("No");
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');