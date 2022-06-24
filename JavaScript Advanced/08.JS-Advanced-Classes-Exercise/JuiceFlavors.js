function flavour(input) {
    let result = {};
    let newMap=new Map();
    for (let index = 0; index < input.length; index++) {
        const [juiceName, quantity] = input[index].split(' => ');
        if (result.hasOwnProperty(juiceName) == false) {
            result[juiceName] = Number(quantity);
        } else {
            result[juiceName] += Number(quantity);
        }
        const bottle=Math.floor(result[juiceName]/1000)
        if (bottle>0) {
            if (newMap.has(juiceName)==false) {
                newMap.set(juiceName,0);
            } 
            newMap.set(juiceName,bottle)
        }
    }
    for (const [key,value] of newMap) {
        console.log(key + ' => ' + value );
    } 
}

flavour(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
flavour(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
