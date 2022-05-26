function shopping(input) {
    let shoppingList = input.shift().split("!");
    while (input[0] != "Go Shopping!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        if (shoppingList.includes(tokens[1])) {
            let indexOfItem=shoppingList.indexOf(tokens[1])
            if (command === "Unnecessary") {
                shoppingList.splice(indexOfItem,1);
            } else if (command === "Correct") {
                let newItem=tokens[2];
                shoppingList.splice(indexOfItem,1,newItem);
            } else if (command === "Rearrange") {
                let itemToPush=shoppingList.splice(indexOfItem,1).toString();
                shoppingList.push(itemToPush);
            }
        } else {
            if (command === "Urgent") {
                shoppingList.unshift(tokens[1]);
            }
        }
    }

    console.log(shoppingList.join(", "))

}

shopping(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
shopping(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
