function speed(input) {
    let numberOfCars=input.shift();
    let cars={};
    for (let index=0;index<numberOfCars;index++) {
        let tokens=input.shift().split("|");
        let carName=tokens[0];
        let mileage=Number(tokens[1]);
        let fuel=Number(tokens[2]);

        cars[carName]= {
            mileage,
            fuel
        }
    }
    while(input[0]!="Stop") {
        let tokens=input.shift().split(" : ");
        let command=tokens[0];
        let carName=tokens[1];
        let parameter1=Number(tokens[2]);
        let parameter2=Number(tokens[3]);
        //console.log(command,carName,parameter1,parameter2)
        if (command==="Drive") {
            if (cars[carName].fuel<parameter2) {
                console.log(`Not enough fuel to make that ride`)
            } else {
                cars[carName].fuel-=parameter2;
                cars[carName].mileage+=parameter1
                console.log(`${carName} driven for ${parameter1} kilometers. ${parameter2} liters of fuel consumed.`)
                if (cars[carName].mileage>=100000) {
                    console.log(`Time to sell the ${carName}!`)
                    delete cars[carName];
                }
            }
        } else if(command==="Refuel") {
            let oldFuelAmmount=cars[carName].fuel;
            cars[carName].fuel+=parameter1;
            if (cars[carName].fuel>75) {
                cars[carName].fuel=75;
            }
            let refueledAmmount=cars[carName].fuel-oldFuelAmmount;
            console.log(`${carName} refueled with ${refueledAmmount} liters`)

        } else if(command==="Revert") {
            cars[carName].mileage-=parameter1;
            if (cars[carName].mileage<10000) {
                cars[carName].mileage=10000;
            } else {
                console.log(`${carName} mileage decreased by ${parameter1} kilometers`)
            }
        }
    }

    for(let [carName,carFuelAndMileage] of Object.entries(cars)) {
        console.log(`${carName} -> Mileage: ${carFuelAndMileage.mileage} kms, Fuel in the tank: ${carFuelAndMileage.fuel} lt.`) //
    }
}

speed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);
speed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);
