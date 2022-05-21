function odd(input) {
    let resultObj=new Map;
    let inputArray=input.split(" ");
    
    for(let index=0;index<inputArray.length;index++) {
        let currentWord=inputArray[index].toLocaleLowerCase();
        if(!resultObj.has(currentWord)) {
            resultObj.set(currentWord,0)
        }
        let newValue=resultObj.get(currentWord) + 1;
        resultObj.set(currentWord,newValue)
    }
    let resultArr=[];

    for (let [word,count] of resultObj) {
        if (count%2===1) {
            resultArr.push(word);
        }
    }
    console.log(resultArr.join(" "));
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
odd('Cake IS SWEET is Soft CAKE sweet Food');