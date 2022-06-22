function deck(arrayOfCards) {
    function cards(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if (faces.includes(face) == false) {
            throw new Error('Invalid face: ' + face);
        }

        const suits = {
            'S': '\u2660 ',
            'H': '\u2665 ',
            'D': '\u2666 ',
            'C': '\u2663 '
        }

        if (suits.hasOwnProperty(suit) == false) {
            throw new Error('Invalid suit: ' + suit);
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
    let result = [];
    for (let index = 0; index < arrayOfCards.length; index++) {
        const card = arrayOfCards[index];
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(cards(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(''))
}

deck(['AS', '10D', 'KH', '2C']);
deck(['5S', '3D', 'QD', '1C']);