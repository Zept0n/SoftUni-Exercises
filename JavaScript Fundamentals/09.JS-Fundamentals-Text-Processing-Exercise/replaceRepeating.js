function replace(string) {
    let resultArray=[];
    for (let index=0;index<string.length;index++) {
        if (!(string[index]===string[index+1])) {
            resultArray.push(string[index]);
        }
    }
    console.log(resultArray.join(""))
}

replace('aaaaabbbbbcdddeeeedssaa');

replace('qqqwerqwecccwd');