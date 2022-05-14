function addSubtract(array) {
    let sumBefore=0;
    let sumAfter=0;
    for (let i = 0; i < array.length; i++) {
        sumBefore+=array[i];
        if (array[i]%2==0) {
            array[i]+=i;
        }
        else {
            array[i]-=i;
        }
        sumAfter+=array[i];
        
    }
    //console.log("[" + array.join(", ") + "]");
    console.log(array);
    console.log(sumBefore);
    console.log(sumAfter);
    
}
addSubtract([5, 15, 23, 56, 35]);