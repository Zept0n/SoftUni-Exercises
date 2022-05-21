function solve(number) {
    //with array
    let arr=String(number).split("").map(Number);
    let firstElement=arr[0];
    let isSame=true;
    let sumOfElements=0;
    for (let index=0;index<arr.length;index++) {
        if (firstElement!=arr[index]) {
            isSame=false;
        }
        sumOfElements+=arr[index];
    }
    console.log(isSame+"\n"+sumOfElements)
}

solve(2222222);

solve(1234);