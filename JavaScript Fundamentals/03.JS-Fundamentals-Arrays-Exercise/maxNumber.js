function maxNumber(input) {
    // let isBiggerThanAllRight=false;
    let newArray=[];
    for (let i =0;i<input.length;i++) {
        let isTopInt=true;
        for (let j=i+1;j<input.length;j++) {
            /* if(input[i]>input[j]) {
                isBiggerThanAllRight=true;
            }
            else {
                isBiggerThanAllRight=false;
                break;
            } */
            if(input[i]<=input[j]) {
                isTopInt=false;
                break;
            }
        }
        /* if(isBiggerThanAllRight) {
            newArray.push(input[i]);
        }
        else if(input[i]===input[input.length-1]) {
            newArray.push(input[i]);
        } */
        if (isTopInt){
            newArray.push(input[i]);
        }
    }
    console.log(newArray.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);