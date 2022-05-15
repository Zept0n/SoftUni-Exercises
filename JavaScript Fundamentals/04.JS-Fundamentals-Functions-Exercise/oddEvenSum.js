function oddAndEvenSum(number) {
    numAsString = String(number);
    function isOdd(number) {
        if (number % 2 === 0) {
            return false;
        }
        else return true;
    }

    function totalOddSum(numberAsText) {
        let oddSum = 0;
        for (index = 0; index < numberAsText.length; index++) {
            let currentNumber = Number(numberAsText[index]);
            if (isOdd(currentNumber)) {
                oddSum += currentNumber;
            }
        }
        return oddSum;
    }

    function evenSum(numberAsText) {
        let evenSum = 0;
        for (index = 0; index < numberAsText.length; index++) {
            let currentNumber = Number(numberAsText[index]);
            if (!(isOdd(currentNumber))) {
                evenSum += currentNumber;
            }
        }
        return evenSum;

    }
    console.log(`Odd sum = ${totalOddSum(numAsString)}, Even sum = ${evenSum(numAsString)}`)
}
oddAndEvenSum(1000435);