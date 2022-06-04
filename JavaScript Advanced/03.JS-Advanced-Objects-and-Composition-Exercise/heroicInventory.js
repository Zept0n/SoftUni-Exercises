function inventory(strArray) {
    let result=[];
    for (let index=0;index<strArray.length;index++) {
        const [heroName,heroLevel,heroItemsString]=strArray[index].split(" / ")
        const heroItems=heroItemsString ? heroItemsString.split(", "):[];
        const heroLvl=Number(heroLevel);
        /* const hero={
            name:heroName,
            level:heroLvl,
            items:heroItems
        }
        result.push(hero); */

        //if I named them correctly result.push({name,level,items});
        result.push({
            name:heroName,
            level:heroLvl,
            items:heroItems
        })
    }
    return JSON.stringify(result);
}

inventory(['Isacc / 23 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
inventory(['Jake / 1000 / Gauss, HolidayGrenade']);
