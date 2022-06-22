function auto(array) {
    // class Cars{
    //     constructor(model,producedCars){
    //         this.model=model;
    //         this.producedCars=producedCars;
    //     }
    // }

    let resultObj={}
    for(let index=0;index<array.length;index++) {
        const [brand,model,producedCars]=array[index].split(" | ")

        if (resultObj.hasOwnProperty(brand)==false) {
            resultObj[brand]={};
        }
        if (resultObj[brand].hasOwnProperty(model)==false) {
            resultObj[brand][model]=0;
        }
        resultObj[brand][model]+=Number(producedCars);
    }
    for(let [brand,models] of Object.entries(resultObj)) {
        console.log(brand);
        for(let [model,producedCars] of Object.entries(models)) {
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}


auto(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
