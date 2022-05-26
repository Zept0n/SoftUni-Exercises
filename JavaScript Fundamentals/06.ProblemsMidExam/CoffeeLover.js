function coffee(input) {
    let coffeeList = input.shift().split(" ");
    let commandNumber = Number(input.shift());
    for (let index = 0; index < commandNumber; index++) {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        if (command === "Include") {
            coffeeList.push(tokens[1]);
        }
        if (command === "Remove") {
            let deleteCount = Number(tokens[2]);
            if (deleteCount < coffeeList.length) {
                if (tokens[1] === "first") {
                    coffeeList.splice(0, deleteCount);
                } else if (tokens[1] === "last") {
                    coffeeList.splice(-deleteCount, deleteCount);
                }
            }
        }
        if (command === "Prefer") {
            if (coffeeList[tokens[1]] != undefined && coffeeList[tokens[2]] != undefined) {
                let temp = coffeeList[tokens[1]];
                coffeeList[tokens[1]] = coffeeList[tokens[2]];
                coffeeList[tokens[2]] = temp;
            }
        }
        if (command === "Reverse") {
            coffeeList.reverse();
        }

    }
    console.log(`Coffees:\n${coffeeList.join(" ")}`);
}
coffee(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);

coffee(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"]);

coffee(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"]);


