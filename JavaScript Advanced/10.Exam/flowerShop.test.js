const {flowerShop}=require('./flowerShop');
const {expect}=require('chai');

describe("Tests …", function() {
    describe("calcPriceOfFlowers(flower, price, quantity) ", function() {
        it("happy path", function() {
            expect(flowerShop.calcPriceOfFlowers('flower',2,4)).to.equal(`You need $8.00 to buy flower!`);
            expect(flowerShop.calcPriceOfFlowers('flower',0,0)).to.equal(`You need $0.00 to buy flower!`);
            expect(flowerShop.calcPriceOfFlowers('flower',0,5)).to.equal(`You need $0.00 to buy flower!`);
            expect(flowerShop.calcPriceOfFlowers('flower',5,0)).to.equal(`You need $0.00 to buy flower!`);
            //expect(flowerShop.calcPriceOfFlowers('flower',3.14,2)).to.equal(`You need $6.28 to buy flower!`);
        });
        it("invalid input", function() {
            expect(()=>flowerShop.calcPriceOfFlowers('flower','2',4)).to.throw(`Invalid input!`);
            expect(()=>flowerShop.calcPriceOfFlowers('flower',2,'4')).to.throw(`Invalid input!`);
            expect(()=>flowerShop.calcPriceOfFlowers(5,2,4)).to.throw(`Invalid input!`);
            //expect(()=>flowerShop.calcPriceOfFlowers('flower',-2,4)).to.throw(`Invalid input!`);
        });
     });
     describe("checkFlowersAvailable(flower, gardenArr) ", function() {
        it("happy path", function() {
            // TODO: …
            expect(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
            expect(flowerShop.checkFlowersAvailable('Rose',["Lily", "Orchid"])).to.equal(`The Rose are sold! You need to purchase more!`)
        });
     });
     describe("sellFlowers(gardenArr, space) ", function() {
        it("happy path", function() {
            // TODO: …
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0)).to.equal(`Lily / Orchid`)
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],3)).to.throw(`Invalid input!`)
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],7)).to.throw(`Invalid input!`)
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1)).to.throw(`Invalid input!`)
            expect(()=>flowerShop.sellFlowers([],0)).to.throw(`Invalid input!`)
            expect(flowerShop.sellFlowers(["Rose"],0)).to.equal(``)
            expect(()=>flowerShop.sellFlowers('2',0)).to.throw(`Invalid input!`)
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'Rose')).to.throw(`Invalid input!`)
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],[2,2])).to.throw(`Invalid input!`)
            
        });
     });
});
