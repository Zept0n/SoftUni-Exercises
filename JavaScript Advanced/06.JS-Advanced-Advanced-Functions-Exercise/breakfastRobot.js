function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock,
        prepare,
        report
    }

    return manager;


    function restock(type, quantity) {
        stock[type] += Number(quantity);
        return 'Success';
    }
    function prepare(recipeStr, nTimes) {
        nTimes = Number(nTimes);
        const recipe = Object.entries(recipes[recipeStr]);
        recipe.map((a) => (a[1] *= nTimes));
        for (let [ingred, required] of recipe) {
            if (stock[ingred] < required) {
                return `Error: not enough ${ingred} in stock`
            }
        }
        recipe.forEach(([ingredient, required]) => stock[ingredient] -= required);
        return 'Success';
    }
    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }




    function manager(list) {
        const [command, param, quantity] = list.split(" ");
        return commands[command](param, quantity);
    }
}



let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 

