function largestNumber(num1, num2, num3) {
    console.log(`The largest number is ${Math.max(num1,num2,num3)}.`) 

    //let array = [num1, num2, num3];

    //using Spread operator
    //console.log(Math.max(...array))
    //using .apply to spread
    //console.log(Math.max.apply(null, array));

    /* 
    array.sort((a,b) => a-b);
    console.log(array[array.length-1]); 
    */

    //console.log(array.reduce((max, currentValue) => Math.max(max, currentValue), array[0]))


    /* 
    Using for loop
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        max = (currentValue > max) ? currentValue : max
    }

    console.log(max) 
    */


}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);