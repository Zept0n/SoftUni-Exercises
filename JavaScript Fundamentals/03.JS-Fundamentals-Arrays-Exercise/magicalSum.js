function magicalSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        let newArray = [];
        let isSumFound = false;
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                newArray.push(array[i]);
                newArray.push(array[j]);
                isSumFound = true;
            }
        }
        if (isSumFound) {
            console.log(newArray.join(" "));
        }

    }
}
magicalSum([1, 7, 6, 2, 19, 23],8); 
console.log("------")
magicalSum([1, 2, 3, 4, 5, 6],6);
console.log("------")
magicalSum([14, 20, 60, 13, 7, 19, 8],27);
