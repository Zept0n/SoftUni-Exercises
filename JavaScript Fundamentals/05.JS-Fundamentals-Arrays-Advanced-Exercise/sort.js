function sort(input) {
    let sortedMaxtoMin=input.sort((a, b) => b - a);
    let resultArray=[];
    while (sortedMaxtoMin.length>0) {
        resultArray.push(sortedMaxtoMin.shift());
        resultArray.push(sortedMaxtoMin.pop());
    }
    console.log(resultArray.join(" "))
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);