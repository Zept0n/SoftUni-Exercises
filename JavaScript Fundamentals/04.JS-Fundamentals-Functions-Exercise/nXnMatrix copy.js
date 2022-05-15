function matrix(num) {
    let array = [];
    for(i = 0; i< num; i++){
        array.push([]);
        for (j=0; j< num; j++){
            array[i][j] = num;
        }
    }
    for (let iterator of array) {
        console.log(iterator.join(' '));
    }
}

matrix(3);