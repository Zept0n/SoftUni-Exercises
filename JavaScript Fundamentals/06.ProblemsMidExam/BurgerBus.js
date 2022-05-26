function burger(input) {
    let numberOfCities = Number(input.shift());
    let totalProfit = 0;
    for (let index = 1; index <= numberOfCities; index++) {
        let profitForCity = 0;
        let currentCity = input.shift();
        let currentEarnedMoney = Number(input.shift());
        let currentExpenses = Number(input.shift());
        if (index % 3 === 0 && index % 5 != 0) { 
            currentExpenses=currentExpenses+((1/2)*currentExpenses);
        }
        if (index % 5 === 0) {
            currentEarnedMoney=currentEarnedMoney-(0.10*currentEarnedMoney);
        }
        profitForCity=currentEarnedMoney-currentExpenses;
        totalProfit+=profitForCity;
        console.log(`In ${currentCity} Burger Bus earned ${profitForCity.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

burger(["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]);

burger(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"]);
