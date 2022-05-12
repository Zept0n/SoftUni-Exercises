function sumDigits(num) {
    let numAsString=String(num);
    let result=0;
    /* for (let i = 0; i<numAsString.length;i++) {
        result+=Number(numAsString[i]);
    }
    console.log(result); */

    /* numAsString.split("").forEach(function (char){
        result+=Number(char);
    })
    console.log(result); */

    numAsString.split("").map(function (char){
        result+=Number(char);
    })
    console.log(result);

}

sumDigits(245678);