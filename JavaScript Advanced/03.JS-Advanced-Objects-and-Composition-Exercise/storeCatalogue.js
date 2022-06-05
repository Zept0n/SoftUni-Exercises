function catalogue(products) {
    let result={};
    for (let index=0;index<products.length;index++) {
        const [name,price]=products[index].split(" : ");
        result[name]=price;
    }
    let sorted=Object.entries(result).sort((a,b)=>a[0].localeCompare(b[0]));
    let initial=sorted[0][0][0];
    console.log(initial);
    for (const array of sorted) {
        let check=initial.localeCompare(array[0][0]);
        if (check) {
            initial=array[0][0];
            console.log(initial)
        }
        
        const [name,value]=array;
        console.log(`  ${name}: ${value}`);
    }
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


);
catalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);
