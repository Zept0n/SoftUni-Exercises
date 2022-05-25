function enigma(input) {
    let numberOfEncryptedMessages = input.shift();
    let attackedPlanetsArray = [];
    let destroyedPlanetsArray = [];
    for (let index = 0; index < numberOfEncryptedMessages; index++) {
        let currentLine = input[index];
        let regex = /[star]/gi;
        let count = 0;
        let starArray = currentLine.match(regex)
        if(starArray!==null) {
            for (let i=0;i<starArray.length;i++) {
                count++;
            }
        }
        currentLine = currentLine.split("");
        let newLine = ""
        for (let j = 0; j < currentLine.length; j++) {
            let oldCharCode = currentLine[j].charCodeAt(0);
            let newCharCode = oldCharCode - count;
            newLine += String.fromCharCode(newCharCode);
        }
        let regex2 = /[^@,\-\!\:\>]*@(?<planetName>[a-zA-Z]+)[^@,\-\!\:\>]*:(?<planetPop>\d+)[^@,\-\!\:\>]*!(?<attackType>[AD])![^@,\-\!\:\>]*->(?<soldierCount>\d+)/g;
        // /[^@,\-\!\:\>]*(?<planetName>@\w+)[^@,\-\!\:\>]*(?<planetPop>:\d+)[^@,\-\!\:\>]*!(?<attackType>[AD])![^@,\-\!\:\>]*->(?<soldierCount>\d+)
        let result = regex2.exec(newLine);
        if (result) {
            if (result.groups.attackType === "A") {
                attackedPlanetsArray.push(result.groups.planetName);
            }
            else {
                destroyedPlanetsArray.push(result.groups.planetName);
            }
        }
    }
    attackedPlanetsArray = attackedPlanetsArray.sort((a, b) => a.localeCompare(b))
    let attackedPlanetsCount = attackedPlanetsArray.length;
    console.log(`Attacked planets: ${attackedPlanetsCount}`)
    for (let index = 0; index < attackedPlanetsCount; index++) {
        console.log(`-> ${attackedPlanetsArray[index]}`);
    }
    destroyedPlanetsArray = destroyedPlanetsArray.sort((a, b) => a.localeCompare(b))
    let destroyedPlanetsCount = destroyedPlanetsArray.length;
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    for (let index = 0; index < destroyedPlanetsCount; index++) {
        console.log(`-> ${destroyedPlanetsArray[index]}`);
    }
}

enigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
);
console.log("----------------------")
enigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);