function solve(input) {

    let pattern = />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let match = pattern.exec(input);
    let furniture = [];
    let totalPrice = 0;

    while (match != null) {

        let price = match.groups['price'];
        let quantity = match.groups['quantity'];

        let currentCost = price * quantity;
        furniture.push(match.groups['furniture']);
        totalPrice += currentCost;

        match = pattern.exec(input);
    }

    
    if (furniture.length == 0) {
        console.log(`Bought furniture:\nTotal money spend: ${totalPrice.toFixed(2)}`);
    } else {
        console.log("Bought furniture:")
        for (let object of furniture) {
            console.log(object);
        }
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    }

}
solve(['>>Sofa<<312.23!0',
    '>>TV<<300!0',
    '>Invalid<<!5',
    'Purchase']
);




