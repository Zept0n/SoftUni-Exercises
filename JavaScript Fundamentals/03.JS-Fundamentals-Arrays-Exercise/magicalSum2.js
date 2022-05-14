function magicalSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}
magicalSum([1, 7, 6, 2, 19, 23],8); 
console.log("------")
magicalSum([1, 2, 3, 4, 5, 6],6);
console.log("------")
magicalSum([14, 20, 60, 13, 7, 19, 8],27);
