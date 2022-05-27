function pirates(input) {
    let listOfTownsToAttack={};
    while(input[0]!="Sail") {
        let tokens=input.shift().split("||");
        let name=tokens[0];
        let population=Number(tokens[1]);
        let gold=Number(tokens[2]);
        if (!listOfTownsToAttack.hasOwnProperty(name)) {
            listOfTownsToAttack[name]={
                population,
                gold
            }
        } else {
            listOfTownsToAttack[name].population+=population
            listOfTownsToAttack[name].gold+=gold
        }
    }
    input.shift();
    while(input[0]!="End") {
        let tokens=input.shift().split("=>");
        let command=tokens[0];
        let name=tokens[1];
        let p1=tokens[2];
        let p2=tokens[3];
        if (command==="Plunder") {
            listOfTownsToAttack[name].population-=+p1;
            listOfTownsToAttack[name].gold-=+p2;
            console.log(`${name} plundered! ${p2} gold stolen, ${p1} citizens killed.`)
            if (listOfTownsToAttack[name].population<=0||listOfTownsToAttack[name].gold<=0) {
                delete listOfTownsToAttack[name];
                console.log(`${name} has been wiped off the map!`)
            }
        } else if (command==="Prosper") {
            if (p1<0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                listOfTownsToAttack[name].gold+=+p1;
                console.log(`${p1} gold added to the city treasury. ${name} now has ${listOfTownsToAttack[name].gold} gold.`)
            }
            
        }
    }
    let townArray=Object.entries(listOfTownsToAttack);
    if (townArray.length>0) {
        console.log(`Ahoy, Captain! There are ${townArray.length} wealthy settlements to go to:`)
    }
    else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
    for (town of townArray){
        console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`)
    }
}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
);

pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)