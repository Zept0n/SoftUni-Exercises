function guinea(input) {
    input = input.map(Number);
    let foodInKg = input.shift();
    let hayInKg = input.shift();
    let coverInKg = input.shift();
    let guineaPigWeight = input.shift();

    for (let index = 1; index <= 30; index++) {
        foodInKg -= 0.3;
        if (index % 2 === 0) {
            hayInKg -= foodInKg * 0.05;
        }
        if (index % 3 === 0) {
            coverInKg -= guineaPigWeight * (1 / 3);
        }
        if (Number(foodInKg.toFixed(2)) <= 0 || hayInKg <= 0 || coverInKg <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`)

}

guinea(["10", "5", "5.2", "1"]);

guinea(["1", "1.5", "3", "1.5"]);

guinea(["9", "5", "5.2", "1"]);

