const {rentCar}=require('./rentCar');
const {expect}=require('chai');

describe("Tests …", function() {
    describe("searchCar(shop, model)", function() {
        it("happy path", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Audi')).to.equal('There is 1 car of model Audi in the catalog!')
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi","Audi"],'Audi')).to.equal('There is 2 car of model Audi in the catalog!')
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi",""],'')).to.equal('There is 1 car of model  in the catalog!')
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'brr')).to.throw('There are no such models in the catalog!')
        });
        it("invalid input", function() {
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "2"],2)).to.throw('Invalid input!')
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi","Audi"],undefined)).to.throw('Invalid input!')
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi","Audi"],null)).to.throw('Invalid input!')
            expect(()=>rentCar.searchCar(2,'2')).to.throw('Invalid input!')
            expect(()=>rentCar.searchCar('"Volkswagen", "BMW", "Audi","Audi"','Audi')).to.throw('Invalid input!')
        });
     });

    //  Volkswagen: 20,
    //  Audi: 36,
    //  Toyota: 40,
    //  BMW: 45,
    //  Mercedes: 50

     describe("calculatePriceOfCar(model, days) ", function() {
        it("happy path", function() {
            expect(rentCar.calculatePriceOfCar('Volkswagen',2)).to.equal(`You choose Volkswagen and it will cost $40!`)
            expect(rentCar.calculatePriceOfCar('BMW',0)).to.equal(`You choose BMW and it will cost $0!`)
            expect(rentCar.calculatePriceOfCar('Mercedes',1)).to.equal(`You choose Mercedes and it will cost $50!`)
        });
        it("invalid input", function() {
            expect(()=>rentCar.calculatePriceOfCar('Volkswagen','2')).to.throw('Invalid input!')
            expect(()=>rentCar.calculatePriceOfCar(2,2)).to.throw('Invalid input!')
            expect(()=>rentCar.calculatePriceOfCar('Volkswagen',2.5)).to.throw('Invalid input!')
        });
        it("no such car", function() {
            expect(()=>rentCar.calculatePriceOfCar('brr',2)).to.throw('No such model in the catalog!')
        });
     });

     describe("checkBudget(costPerDay, days, budget)", function() {
        it("happy path", function() {
            expect(rentCar.checkBudget(2,2,4)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(2,2,8)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(2,2,3)).to.equal(`You need a bigger budget!`)
            expect(rentCar.checkBudget(2,2,2)).to.equal(`You need a bigger budget!`)
            expect(rentCar.checkBudget(2,2,-4)).to.equal(`You need a bigger budget!`)
        });
        it("invalid input", function() {
            expect(()=>rentCar.checkBudget('2',2,4)).to.throw('Invalid input!')
            expect(()=>rentCar.checkBudget(2,'2',4)).to.throw('Invalid input!')
            expect(()=>rentCar.checkBudget(2,2,'4')).to.throw('Invalid input!')
            expect(()=>rentCar.checkBudget(2,2,'aa')).to.throw('Invalid input!')
            expect(()=>rentCar.checkBudget(2,'aa',4)).to.throw('Invalid input!')
            expect(()=>rentCar.checkBudget('aa',2,4)).to.throw('Invalid input!')
        });
     });
     // TODO: …
});
