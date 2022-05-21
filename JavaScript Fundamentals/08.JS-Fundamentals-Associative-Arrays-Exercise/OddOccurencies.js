function odd(input) {
    let resultObj={};
    let inputArray=input.split(" ");
    
    for(let index=0;index<inputArray.length;index++) {
        let currentWord=inputArray[index].toLocaleLowerCase();
        if(!resultObj.hasOwnProperty(currentWord)) {
            resultObj[currentWord]=0;
        }
        resultObj[currentWord]++;
    }

    let resultArr=[];

    for (let key in resultObj) {
        if (resultObj[key]%2===1) {
            resultArr.push(key);
        }
    }
    console.log(resultArr.join(" "));
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
odd('Cake IS SWEET is Soft CAKE sweet Food');