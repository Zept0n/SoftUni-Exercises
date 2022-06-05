function lowPrice(array) {
    let result = {};
    for (let index = 0; index < array.length; index++) {
        const [town, product, price] = array[index].split(" | ")
        if (!(result.hasOwnProperty(product))) {
            result[product] = {
                town,
                price:Number(price)
            }
        }
        if (result[product].price > Number(price)) {
            result[product].town = town;
            result[product].price = price;
        }
    }
    for (const [product,{price,town}] of Object.entries(result)) {
        console.log(`${product} -> ${price} (${town})`);
    } 
}

lowPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
