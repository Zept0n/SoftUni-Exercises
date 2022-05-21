function mine(input) {
    let resultObj={};
    for (let index=0;index<input.length;index+=2) {
        let currentResource=input[index];
        let currentResourceQuantity=Number(input[index+1]);
        
        if(resultObj.hasOwnProperty(currentResource)===false) {
            resultObj[currentResource]=0;
        }
        resultObj[currentResource]+=currentResourceQuantity;
    }
    for(let [resource,quantity] of Object.entries(resultObj)){
        console.log(`${resource} -> ${quantity}`)
    }
}

mine([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );
mine([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );
