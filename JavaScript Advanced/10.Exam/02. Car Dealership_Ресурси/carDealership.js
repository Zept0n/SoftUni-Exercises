class CarDealership {
    constructor(name) {
        this.name=name;
        this.availableCars=[];
        this.soldCars=[];
        this.totalIncome=0;
    }

    addCar(model,horsepower,price,mileage) {
        if(typeof model!='string'||model=='') {
            throw new Error('Invalid input!');
        }
        if (typeof horsepower!='number'||Number.isInteger(horsepower)==false||horsepower<0) {
            throw new Error('Invalid input!');
        }
        if (typeof price!='number'||price<0) {
            throw new Error('Invalid input!');
        }
        if (typeof mileage!='number'||mileage<0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model,desiredMileage) {
        //const plantAsString=this.plants.map(p=>p.plantName).sort((a,b)=>a.localeCompare(b));

        let car=this.availableCars.find(p=>p.model==model);
        if (car==undefined) {
            throw new Error(`${model} was not found!`);
        }
        const differenceMileage=car.mileage-desiredMileage;
        if (differenceMileage>40000) {
            car.price=car.price-(car.price*(10/100));
        } else if (differenceMileage>0) {
            car.price=car.price-(car.price*(5/100)); 
        }

        const indexCar=this.availableCars.findIndex(p=>p.model==model);
        this.soldCars.push({
            model,
            horsepower:car.horsepower,
            soldPrice:car.price
        })
        this.availableCars.splice(indexCar,1);
        this.totalIncome+=car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`

    }

    currentCar() {
        if (this.availableCars.length==0) {
            return `There are no available cars`
        }
        let resultArray=['-Available cars:']
        for (let index=0;index<this.availableCars.length;index++) {
           resultArray.push(`---${this.availableCars[index].model} - ${this.availableCars[index].horsepower} HP - ${this.availableCars[index].mileage.toFixed(2)} km - ${this.availableCars[index].price.toFixed(2)}$`)
        }
        return resultArray.join('\n');
    }

    salesReport(criteria) {
        if (criteria!='horsepower'&&criteria!='model') {
            throw new Error("Invalid criteria!");
        }
        if (criteria=='horsepower') {
            this.soldCars.sort((a,b)=>b.horsepower-a.horsepower);
        }
        if (criteria=='model') {
            this.soldCars.sort((a,b)=>a.model.localeCompare(b.model));
        }
        let soldCars=[];
        for (let index=0;index<this.soldCars.length;index++) {
            soldCars.push(`---${this.soldCars[index].model} - ${this.soldCars[index].horsepower} HP - ${this.soldCars[index].soldPrice.toFixed(2)}$`)
        }
        soldCars=soldCars.join('\n');
        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            soldCars
        ].join('\n');
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




