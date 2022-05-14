function equalSums(array) {
    let toDisplay=0;
    for (let i = 0; i < array.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        for(let j=i+1;j<array.length;j++) {
            //console.log(array[i]+" " + array[j]);
            sumRight+=array[j];
        }
        for(let x=i-1;x>=0;x--) {
           // console.log(array[i]+" " + array[x]);
            sumLeft+=array[x];
        }
        //console.log(i+"-" + sumLeft + "?=" + sumRight);
        if(sumLeft===sumRight) {
           toDisplay=i;
           break;
        }
        else toDisplay="no";
        //console.log(sumRight);
    }
    console.log(toDisplay);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
