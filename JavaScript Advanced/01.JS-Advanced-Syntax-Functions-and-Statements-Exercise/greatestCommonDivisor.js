/* function gcd(num1,num2) {
    let number1=Number(num1);
    let number2=Number(num2);

    if (number1 == 0)
        return number2;
    return gcd(number2 % number1, number1);
} */


function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

console.log(gcd(15, 5));
console.log(gcd(2154, 458));