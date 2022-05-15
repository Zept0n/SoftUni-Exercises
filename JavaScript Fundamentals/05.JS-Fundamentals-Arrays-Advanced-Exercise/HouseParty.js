function party(input) {
    let partyList=[];
    for (commands of input) {
        let command=commands.split(" ");
        let name=command[0];
        if (!(command.includes("not"))){
            if (!(partyList.includes(name))) {
                partyList.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        } 
        else {
            if (partyList.includes(name)) {
                partyList.splice(partyList.indexOf(name),1);
            }
            else {
                console.log(`${name} is not in the list!`);
            }

        }
    }
    console.log(partyList.join("\n"))
}

party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)