function bombNumbers(sequence,numberAndPower) {
    let number=numberAndPower.shift();
    let power=numberAndPower.shift();
    while(sequence.includes(number)){
        indexOfNumber=sequence.indexOf(number);
/*         let start=Math.max(0,indexOfNumber-power)
        let end=(power*2)+1; */
        let start=0;
        let end=0;
        if(indexOfNumber-power>=0){
            start=indexOfNumber-power;
            end=(power*2)+1;
        }
        else{
            start=0;
            end=(power*2)
        }
        sequence.splice(start,end);
    }
    let sum=0;
    for(let index=0;index<sequence.length;index++) {
        sum+=sequence[index];
    }
    console.log(sum);
}


bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
        [2, 1]
        )

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 2]
    )