function inventory(input) {
    let heroes=[];
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(" / ");
        let name=tokens[0];
        let level=tokens[1];
        let items=tokens[2];
        heroes.push({
            name,
            level,
            items,
        })
    }
    heroes.sort((a,b)=>a.level-b.level);
    for(let index=0;index<heroes.length;index++) {
        console.log(`Hero: ${heroes[index].name}\nlevel => ${heroes[index].level}\nitems => ${heroes[index].items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
)