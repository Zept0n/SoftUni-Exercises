function store(arr) {
    let end='';
    if(arr.includes("regular")){
        customer="regular";
        end=arr.indexOf("regular");
    } else if(arr.includes("special")) {
        customer="special";
        end=arr.indexOf("special");
    }
    let taxes = 0;
    let totalSum = 0;
    let sumWithoutTaxes = 0;
    for (let i = 0; i < end; i++) {
        let curElement = Number(arr[i]);
        if (curElement < 0) {
            console.log("Invalid price!");
 
            continue;
        }
        sumWithoutTaxes += curElement;
        taxes = sumWithoutTaxes * 0.20;
        totalSum = sumWithoutTaxes + taxes;
    }
    if (customer == 'special') {
        totalSum = totalSum - (totalSum * 0.10);
    }
 
    if (totalSum == 0) {
        console.log("Invalid order!")
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTaxes}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }
}


store([
    'special',
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
]);

/* store([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);

store([
    'regular'
]);

 */