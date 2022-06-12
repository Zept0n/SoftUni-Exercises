function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let bestRestaurant = {
            name: '',
            averageSalary: 0,
            bestSalary: 0,
            workers: []
        }
        const input = JSON.parse(document.querySelector(`#inputs textarea`).value);
        //.split(`"`).filter((element)=>element!="["||element!="]"||element!=','||element!="");
        let outputRestaurantText = document.querySelector(`#bestRestaurant p`);
        let outputWorkersText = document.querySelector(`#workers p`);
        //Unreadable
        for (let index = 0; index < input.length; index++) {
            let sumSalaries = 0;
            let highestSalary = 0;
            const [restaurant, stringWorkers] = input[index].split(" - ")
            const workers = stringWorkers.split(", ")
            for (let j = 0; j < workers.length; j++) {
                const [, salary] = workers[j].split(" ");
                sumSalaries += Number(salary);
                if (highestSalary < Number(salary)) {
                    highestSalary = Number(salary);
                }
            }
            let avgSalary = sumSalaries / workers.length;

            
            if (bestRestaurant.name == '') {
                bestRestaurant.name = restaurant;
                bestRestaurant.averageSalary = avgSalary;
                bestRestaurant.bestSalary = highestSalary;
                for (let j = 0; j < workers.length; j++) {
                    const [worker, salary] = workers[j].split(" ");
                    bestRestaurant.workers.push([worker, salary]);
                }
            } else if (bestRestaurant.name==restaurant) {
                for (let j = 0; j < workers.length; j++) {
                    const [worker, salary] = workers[j].split(" ");
                    bestRestaurant.workers.push([worker, salary]);
                }

                let updateSumSalaries = 0;
                let updateHighestSalary = 0;
                for (let index=0;index<bestRestaurant.workers.length;index++) {
                    const [worker,salary]=bestRestaurant.workers[index];
                    updateSumSalaries += Number(salary);
                    if (updateHighestSalary < Number(salary)) {
                        updateHighestSalary = Number(salary);
                    }
                }
                bestRestaurant.averageSalary=updateSumSalaries/bestRestaurant.workers.length;
                bestRestaurant.bestSalary=updateHighestSalary;

            } else if (bestRestaurant.averageSalary < avgSalary) {
                bestRestaurant.name = restaurant;
                bestRestaurant.averageSalary = avgSalary;
                bestRestaurant.bestSalary = highestSalary;
                //Clear array
                bestRestaurant.workers.length = 0;
                for (let j = 0; j < workers.length; j++) {
                    const [worker, salary] = workers[j].split(" ");
                    bestRestaurant.workers.push([worker, salary]);
                }
            }
        }
        bestRestaurant.workers.sort((arrayA,arrayB)=>arrayB[1]-arrayA[1])
        outputRestaurantText.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
        for (let index = 0; index < bestRestaurant.workers.length; index++) {
            outputWorkersText.textContent += `Name: ${bestRestaurant.workers[index][0]} With Salary: ${bestRestaurant.workers[index][1]} `
            //`Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`
        }
    }
}