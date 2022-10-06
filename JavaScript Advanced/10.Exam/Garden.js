class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.')
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let plant;
        for(let index=0;index<this.plants.length;index++) {
            if(this.plants[index].plantName==plantName) {
                plant=this.plants[index];
            }
        }

        if (plant==undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe==true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity<=0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe=true;
        plant.quantity+=quantity;

        if (quantity==1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        return `${quantity} ${plantName}s have successfully ripened.`
    }

    harvestPlant(plantName) {
        let plant;
        let plantIndex=0;
        for(let index=0;index<this.plants.length;index++) {
            if(this.plants[index].plantName==plantName) {
                plant=this.plants[index];
                plantIndex=index;
            }
        }
        if (plant==undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe!=true) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.splice(plantIndex,1);
        this.storage.push({
            plantName,
            quantity:plant.quantity
        })

        this.spaceAvailable+=plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        //   let plantArray=[]
        // for(let index=0;index<this.plants.length;index++) {
        //     let currentPlant=this.plants[index].plantName;
        //     plantArray.push(currentPlant);
        // }
        // let plantsStr=plantArray.sort((a,b)=>a.localeCompare(b)).join(', ');

        let storageStr=`Plants in storage: The storage is empty.`
        if (this.storage.length!=0) {
            storageStr=`Plants in storage: `
            for(let index=0;index<this.storage.length;index++) {
                storageStr+=`${this.storage[index].plantName} (${this.storage[index].quantity})`;
                if (index!=this.storage.length-1) {
                    storageStr+=", ";
                }
            }    
        }

        // const result =[
        //     `The garden has ${this.spaceAvailable} free space left.`,
        //     `Plants in the garden: ${plantsStr}`,
        //     storageStr
        // ].join('\n')
        // return result;  

        const plantAsString=this.plants.map(p=>p.plantName).sort((a,b)=>a.localeCompare(b));
        const plantsRow=`Plants in the garden: ${plantAsString.join(`, `)}`

        let storageRow='Plants in storage: The storage is empty.';
        if (this.storage.length>0) {
            const storageAsString=this.storage.map(p=>`${p.plantName} (${p.quantity})`);
            storageRow=`Plants in storage: ${storageAsString.join(', ')}`;
        }
        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantsRow,
            storageStr
        ].join(`\n`);
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





/* 'The garden has 220 free space left.\nPlants in the garden: apple,raspberry\nPlants in storage: orange (1)' 
'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)' */