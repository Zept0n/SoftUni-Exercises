function loading(number) {
    if (number>=100) {
        console.log(`100% Complete!`)
    } else {
        let returnString=`${number}% [`;
        let count=number/10;
        for (let index=0;index<10;index++) {
            if(count>0) {
                returnString+='%';
            }
            else {
                returnString+='.';
            }
            count--;
        }
        returnString+="]";
        console.log(returnString);
        console.log("Still loading...");
    }

}

loading(552)