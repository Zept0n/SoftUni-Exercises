function store(firstArray, secondArray) {
    let currentStockAsArray = firstArray;
    let deliveredStockAsArray = secondArray;
    let currentStock = {};
    for (let index = 0; index < currentStockAsArray.length; index += 2) {
        let nameOfProduct = currentStockAsArray[index];
        let quantityOfProduct = Number(currentStockAsArray[index + 1]);
        // console.log(nameOfProduct+ " " + quantityOfProduct);
        currentStock[nameOfProduct] = quantityOfProduct;
    }

    for (let index = 0; index < deliveredStockAsArray.length; index += 2) {
        let nameOfProduct = deliveredStockAsArray[index];
        let quantityOfProduct = Number(deliveredStockAsArray[index + 1]);
        if (!(currentStockAsArray.includes(deliveredStockAsArray[index]))) {
            currentStock[nameOfProduct] = quantityOfProduct;
        } else {
            currentStock[nameOfProduct] += quantityOfProduct;
        }
    }

    for (let property in currentStock) {
        console.log(`${property} -> ${currentStock[property]}`);
    }
}


store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
store([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)


/* 
You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays’ values will be strings.
 */

/* ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'] */
