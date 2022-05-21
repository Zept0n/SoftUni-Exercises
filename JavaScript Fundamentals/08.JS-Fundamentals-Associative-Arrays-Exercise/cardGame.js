function Card(input) {

    //setup maps for power and type of card
    const powerMap = {
        1: 10, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    const typeMap = {
        S: 4, H: 3, D: 2, C: 1
    }
    let resultObj={};
    //iterate through input array of strings
    for (let index=0;index<input.length;index++) {
        //split input line into name and cards
        let [name,cardsString]=input[index].split(": ");
        let cards=cardsString.split(", ");
        if (!resultObj.hasOwnProperty(name)){
            resultObj[name]=new Set();
        }
        for (let card of cards) {
            resultObj[name].add(card);
        }
    }
    for (let [name,cards] of Object.entries(resultObj)) {

         //iterate through cards array
        let totalPower=0;
        for (let card of cards) {
            let currentCardPower=card[0];
            let currentCardType=card[card.length-1]
            let currentCardPowerAsNumber=powerMap[currentCardPower];
            let currentCardTypeAsNumber=typeMap[currentCardType];
            totalPower+=currentCardPowerAsNumber*currentCardTypeAsNumber;
        }
        console.log(`${name}: ${totalPower}`); 
    }   
}

Card([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );

Card([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    );