function addAndSubtract(number1, number2, number3) {
    subtract(sum(number1,number2),number3);
    function sum(n1, n2) {
        return n1 + n2;
    }
    function subtract(sum, n3) {
        console.log(sum - n3);
    }
}
addAndSubtract(23,
    6,
    10
)