function multiplicationTable(number) {
    let multistring="";
    for (let index=1;index<=10;index++) {
        multistring=`${number} X ${index} = ${number*index}`;
        console.log(multistring);
    }
}
multiplicationTable(5)