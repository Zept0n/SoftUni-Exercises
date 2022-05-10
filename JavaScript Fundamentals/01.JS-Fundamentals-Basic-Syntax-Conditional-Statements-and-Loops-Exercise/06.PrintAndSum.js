function printAndSum(start,end) {
    let sum=0;
    let stringOfNum='';
    for(let i=start;i<=end;i++) {
        stringOfNum=stringOfNum+i+' ';
        sum+=i;
    }
    console.log(stringOfNum);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);