function bitcoin(input) {
    let money = 0;
    let bitcoin = 0;
    let dayofFirstPurchase = 0;
    let firstPurchaseDone = false;
    let div = 0;
    for (let index = 0; index <= input.length - 1; index++) {
        if ((index + 1) % 3 === 0) {
            input[index] = input[index] * 0.7;
        }
        money = money + input[index] * 67.51;

        if (money >= 11949.16&&firstPurchaseDone === false) {
            dayofFirstPurchase = index + 1;
            firstPurchaseDone = true;
        }

        // if (money >= 11949.16) {
        //     div=Math.floor(money/11949.16);
        //     bitcoin += 1;
        //     money -= 11949.16;
        //     if (firstPurchaseDone === false) {
        //         dayofFirstPurchase = index + 1;
        //         firstPurchaseDone = true;
        //     }
        // }
    }
    bitcoin=Math.floor(money/11949.16);
    money=money-(bitcoin*11949.16);
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayofFirstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoin([100,200,300]);