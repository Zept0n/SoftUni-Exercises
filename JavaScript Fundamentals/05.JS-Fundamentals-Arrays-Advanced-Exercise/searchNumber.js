function search(array,numbers) {
    let numbersToTake=numbers.shift();
    let numbersToDelete=numbers.shift();
    let numberToSearch=numbers.shift();
    let resultArray=array.slice(0,numbersToTake);
    resultArray.splice(0,numbersToDelete);
    let count=0
    for(let index=0;index<resultArray.length;index++) {
        if(resultArray[index]===numberToSearch){
            count++;
        }
    }
    console.log(`Number ${numberToSearch} occurs ${count} times.`)
}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )