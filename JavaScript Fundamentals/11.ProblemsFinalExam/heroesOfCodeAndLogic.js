function heroes(input) {
    let heroNumber=input.shift();
    let heroes={};
    for (let index=0;index<heroNumber;index++) {
        let tokens=input.shift().split(" ");
        let name=tokens[0];
        let HP=Number(tokens[1]);
        let MP=Number(tokens[2]);
        heroes[name]={
            HP,
            MP
        }
    }
    while(input[0]!="End") {
        let [command,name,p1,p2]=input.shift().split(" - ");
        //console.log(command,name,p1,p2)
        p1=Number(p1);
        //console.log(heroes[name],heroes[name].HP,heroes[name].MP)
        if (command==="CastSpell") {
            if (heroes[name].MP>=p1) {
                heroes[name].MP-=p1;
                console.log(`${name} has successfully cast ${p2} and now has ${heroes[name].MP} MP!`)
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`)
            }
        } else if(command==="TakeDamage") {
            heroes[name].HP-=p1;
            if (heroes[name].HP>0) {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${heroes[name].HP} HP left!`)
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`)
            }

        } else if(command==="Recharge") {
            let recoveredMana=Math.min((200-heroes[name].MP),p1)
            heroes[name].MP+=recoveredMana;
            console.log(`${name} recharged for ${recoveredMana} MP!`)
        } else if(command==="Heal") {
            let recoveredLife=Math.min((100-heroes[name].HP),p1)
            heroes[name].HP+=recoveredLife;
            console.log(`${name} healed for ${recoveredLife} HP!`)
            
        }
    }
    for (hero of Object.entries(heroes)){
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1].HP}\n  MP: ${hero[1].MP}`)
        
    }
}

 heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]); 

heroes([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
]);