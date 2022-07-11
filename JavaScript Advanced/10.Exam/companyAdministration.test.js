const {companyAdministration}=require('./companyAdministration');
const {expect}=require('chai');

describe("Tests …", function() {
    describe("hiringEmployee (name, position, yearsExperience)", function() {
        it("expect error", function() {
            expect(()=>companyAdministration.hiringEmployee('Ivan','QA',5)).to.throw('We are not looking for workers for this position.');
            expect(()=>companyAdministration.hiringEmployee('Ivan','2',5)).to.throw('We are not looking for workers for this position.');
        });
        it("approved", function() {
            expect(companyAdministration.hiringEmployee('Ivan','Programmer',5)).to.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan','Programmer',3)).to.equal(`Ivan was successfully hired for the position Programmer.`);
        });
        it("not approved", function() {
            expect(companyAdministration.hiringEmployee('Ivan','Programmer',2)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan','Programmer',0)).to.equal(`Ivan is not approved for this position.`);
        });
     });
     describe("calculateSalary (hours) ", function() {
        it("expect error", function() {
            expect(()=>companyAdministration.calculateSalary('5')).to.throw('Invalid hours');
            expect(()=>companyAdministration.calculateSalary([5])).to.throw('Invalid hours');
            expect(()=>companyAdministration.calculateSalary()).to.throw('Invalid hours');
            expect(()=>companyAdministration.calculateSalary({hours:5})).to.throw('Invalid hours');
            expect(()=>companyAdministration.calculateSalary(-5)).to.throw('Invalid hours');
            expect(()=>companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });
        it("happy path", function() {
            expect(companyAdministration.calculateSalary(2)).to.equal(30);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
        
     });
     describe("firedEmployee (employees, index) ", function() {
        it("expect error", function() {
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],3)).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'3')).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'2')).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-1)).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],[1])).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee('Two',2)).to.throw('Invalid input');
            expect(()=>companyAdministration.firedEmployee('Two',5)).to.throw('Invalid input');
        });
        it("happy path", function() {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],2)).to.equal('Petar, Ivan');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1)).to.equal('Petar, George');
        });
        
     });
});
