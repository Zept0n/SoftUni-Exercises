class VegetableStore {
    constructor(owner,location) {
        this.owner=owner;
        this.location=location;
        this.availableProducts=[];
    }

    loadingVegetables(vegetables) {
        //let set=new Set();
        for (let index=0;index<vegetables.length;index++) {
            const [type,quantity,price]=vegetables[index].split(" ");
            //console.log(type,quantity,price);
            let foundIndexofType=this.availableProducts.findIndex((element)=>element.type==type);
            if (foundIndexofType==-1) {
                this.availableProducts.push({
                    type,
                    quantity:Number(quantity),
                    price:Number(price)
                })
            } else {
                this.availableProducts[foundIndexofType].quantity+=Number(quantity);
                if (price>this.availableProducts[foundIndexofType].price) {
                    this.availableProducts[foundIndexofType].price=price;
                }
            }
            //set.add(type);
        }
        let returnStr=[];
        for (let product of this.availableProducts) {
            returnStr.push(product.type);
        }
        return `Successfully added ${returnStr.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice=0;
        for (let index=0;index<selectedProducts.length;index++) {
            const [type,quantity]=selectedProducts[index].split(" ");
            let foundIndexofType=this.availableProducts.findIndex((element)=>element.type==type);
            if (foundIndexofType==-1) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity>this.availableProducts[foundIndexofType].quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice+=Number(quantity)*Number(this.availableProducts[foundIndexofType].price)
            this.availableProducts[foundIndexofType].quantity-=quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type,quantity) {
        let foundIndexofType=this.availableProducts.findIndex((element)=>element.type==type);
            if (foundIndexofType==-1) {
                throw new Error(`${type} is not available in the store.`)
            }
            if (quantity>this.availableProducts[foundIndexofType].quantity) {
                this.availableProducts[foundIndexofType].quantity=0;
                return `The entire quantity of the ${type} has been removed.`
            }
            this.availableProducts[foundIndexofType].quantity-=quantity;
            return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let sorted=this.availableProducts.sort((a,b)=>a.price-b.price);
        let resultArray=[];
        for (let {type,quantity,price} of sorted) {
            resultArray.push(`${type}-${quantity}-$${price}`)
        }
        
        return [
            `Available vegetables:`,
            resultArray.join('\n'),
            `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        ].join("\n")
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



