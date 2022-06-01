function even(stringArr) {
    let resultArray=[];
    for(let index=0;index<stringArr.length;index+=2) {
        resultArray.push(stringArr[index]);
    }
    console.log(resultArray.join(" "));
}

even(['20', '30', '40', '50', '60']);
even(['5', '10']);

