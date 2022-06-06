function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: () => {
            city.treasury += city.population * city.taxRate;
        },
        applyGrowth: (percentage) => {
            city.population +=Math.floor(city.population * (percentage/100));
        },
        applyRecession: (percentage) => {
            city.treasury-=Math.floor(city.treasury * (percentage/100));
        }
    }

    return city;
}

/* 
const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city); */

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);



