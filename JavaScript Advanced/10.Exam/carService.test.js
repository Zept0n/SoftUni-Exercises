const { carService } = require('./carService');
const { expect } = require('chai');

describe("Tests …", function () {
    describe("isItExpensive (issue)", function () {

        it("should return The issue with the car is more severe and it will cost more money", function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)
        });

        it("should return The overall price will be a bit cheaper", function () {
            expect(carService.isItExpensive('tires')).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive('')).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive('asdsa')).to.equal(`The overall price will be a bit cheaper`)

        });

    });

    describe("discount (numberOfParts, totalPrice)", function () {

        it("should return You cannot apply a discount", function () {
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount")
            expect(carService.discount(1, 100)).to.equal("You cannot apply a discount")
            expect(carService.discount(-2, 100)).to.equal("You cannot apply a discount")
            expect(carService.discount(0, 100)).to.equal("You cannot apply a discount")
        });

        it("invalid input", function () {
            expect(() => carService.discount('2', 100)).to.throw("Invalid input")
            expect(() => carService.discount(2, '100')).to.throw("Invalid input")
            expect(() => carService.discount([], 100)).to.throw("Invalid input")
            expect(() => carService.discount(2, [])).to.throw("Invalid input")

        });

        it("happy path", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)

            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        });

    });

    describe("partsToBuy (partsCatalog, neededParts) ", function () {

        it("happy path", function () {
            expect(carService.partsToBuy([
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }],
                ["blowoff valve", "injectors"])
            ).to.equal(145)

            expect(carService.partsToBuy([],
                ["blowoff valve", "injectors"])
            ).to.equal(0)

            expect(carService.partsToBuy([
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }],
                ["blowoff valve", "coil springs"])
            ).to.equal(375)
        });

        it("invalid input", function () {
            expect(()=>carService.partsToBuy('blowoff valve',
                ["blowoff valve", "injectors"])
            ).to.throw(`Invalid input`)

            expect(()=>carService.partsToBuy([
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }],
                '["blowoff valve", "injectors"]')
            ).to.throw(`Invalid input`)
        });


    });

    // TODO: …
});
