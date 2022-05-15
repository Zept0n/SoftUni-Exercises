function distinctArray(input) {
    let distinctArray=[];
    for (let index=0;index<input.length;index++) {
        if(!(distinctArray.includes(input[index]))) {
            distinctArray.push(input[index]);
        }
    }
    console.log(distinctArray.join(" "));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);