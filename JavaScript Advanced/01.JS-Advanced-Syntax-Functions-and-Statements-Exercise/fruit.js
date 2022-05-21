function calculateFruit(fruitName, weigthInGrams, pricePerKg) {
    let weightInKG = (Number(weigthInGrams) / 1000)
    let money = weightInKG * Number(pricePerKg)
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitName}.`)
}

calculateFruit('orange', 2500, 1.80);
calculateFruit('apple', 1563, 2.35);
