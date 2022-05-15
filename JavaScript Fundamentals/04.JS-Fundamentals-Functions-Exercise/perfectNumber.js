function perfectNumber(num) {
    let sum = sumOfDividors(num);
    
    if (sum == num) {
        console.log('We have a perfect number!');
    }
    else {
        console.log(`It's not so perfect.`);
 
    }
 
    function sumOfDividors(number) {
        let sum = 0;
        for (i = 1; i < number; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        return sum;
    }
 
}

perfectNumber(28);