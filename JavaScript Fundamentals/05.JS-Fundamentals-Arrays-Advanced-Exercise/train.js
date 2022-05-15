function train(input) {
    let trainWagons=input.shift().split(" ").map(Number);
    let maxCapacity=input.shift();

    for(commands of input) {
        let command=commands.split(" ")
        if (command[0]==="Add") {
            trainWagons.push(Number(command[1]));
        } else {
            for (let index=0;index<trainWagons.length;index++) {
                if(trainWagons[index]+Number(command[0])<=Number(maxCapacity)) {
                    trainWagons[index]+=Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(trainWagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);