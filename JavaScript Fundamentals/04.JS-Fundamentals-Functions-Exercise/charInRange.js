function charInRange(num1, num2) {
    let startChar = Math.min(num1.charCodeAt(0), num2.charCodeAt(0))
    let endChar = Math.max(num1.charCodeAt(0), num2.charCodeAt(0))
    let charsInRangeArray = [];
    for (index = startChar + 1; index < endChar; index++) {
        charsInRangeArray.push(String.fromCharCode(index));
    }
    console.log(charsInRangeArray.join(" "));
}

charInRange('a',
    'd'
)