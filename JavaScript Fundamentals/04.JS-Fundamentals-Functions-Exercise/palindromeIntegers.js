function palindromeIntegers (numberArray) {

    function isPalindrom(number) {
        let startNumber=number;
        let reverseNumber=Number(number.toString().split('').reverse().join(''));
        if (startNumber===reverseNumber) {
            return true;
        }
        else {
            return false;
        }
    }
    for (let index=0;index<numberArray.length;index++) {
        console.log(isPalindrom(numberArray[index]));
    }
}
palindromeIntegers([123,323,421,121]);