function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;
    let stepscount = 0;
    for (let baseindex = base; baseindex > 0; baseindex -= 2) {
        stepscount += 1;
        if(baseindex===1||baseindex===2) {
            gold=(baseindex*baseindex)*increment;
            break;
        }
        stone=stone+(baseindex-2)*(baseindex-2)*increment;
        if (stepscount % 5 === 0) {
            lapiz = lapiz + (baseindex * 4 - 4)*increment;
        }
        else {
            marble = marble + (baseindex * 4 - 4)*increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stepscount*increment)}`);
}

pyramid(23, 0.5);