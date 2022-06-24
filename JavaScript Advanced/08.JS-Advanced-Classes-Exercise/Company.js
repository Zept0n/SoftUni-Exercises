
//Incorrect
////In this example i've taken the department with the highest salary as the best,insted of the department with the highest average salary.

class Company {
    constructor() {
        this.departments = {};
        this.bestDep='';
        this.bestSalary=0;
    }
    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].some((arg) => arg == undefined)) {
            throw new Error('Invalid input!');
        }
        if ([name, salary, position, department].some((arg) => arg == null)) {
            throw new Error('Invalid input!');
        }
        if ([name,salary,position,department].some((arg) => arg =='')) {
            throw new Error('Invalid input!');
        }
        if (salary<0){
            throw new Error('Invalid input!');
        }
        if (this.departments.hasOwnProperty(department)==false) {
            this.departments[department]={};
        } 
        
        if (this.bestSalary<salary) {
            this.bestSalary=salary;
            this.bestDep=department
        }

        this.departments[department][name]=[salary,position];

        return `New employee is hired. Name: ${name}. Position: ${position}`
        
    }
    bestDepartment() {
        let bestDepartment=this.departments[this.bestDep];
        let total=0;
        let sorted=Object.entries(bestDepartment).sort((a,b)=>a[0].localeCompare(b[0])).sort((a,b)=>b[1][0]-a[1][0]);
        for (let index=0;index<sorted.length;index++) {
            total+=Number(sorted[index][1][0]);
        }
        let average=total/sorted.length;
        let result='';
        result+=`Best Department is: ${this.bestDep}\n`;
        result+=`Average salary: ${average.toFixed(2)}\n`;
        for (let index=0;index<sorted.length;index++) {
            //{employee1} {salary} {position}
            let name=sorted[index][0];
            let salary=Number(sorted[index][1][0]);
            let position=sorted[index][1][1]
            result+=`${name} ${salary} ${position}`;
            if (index==sorted.length-1==false) {
                result+=`\n`
            }
        }
        return result;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
//console.log(c);

/* for(let [key,value] of Object.entries(c)) {
    console.log(key,value)
} */

/* 
Best Department is: Human resources\nAverage salary: 1675\nStanimir 2000 engineer\nGosho 1350 HR' 
'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR' */


