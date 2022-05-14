function maxSequence(input) {
    let newArray=[];
    let firstArray=[];
    for(let i =0 ; i<input.length;i++) {
        firstArray=[];
        for(let j=i;j<input.length;j++) {
            if(input[i]===input[j]) {
                firstArray.push(input[j]);
            }
            else {
                break;
            }
            if (firstArray.length>newArray.length){
                newArray=firstArray;
            }
        }
    }
    console.log(newArray.join(" "))
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);