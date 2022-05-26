function school(input) {
    let bookList = input.shift().split("&");
    while (input[0] != "Done") {
        let tokens = input.shift().split(" | ");
        let command = tokens[0];
        if (command === "Add Book") {
            if (!(bookList.includes(tokens[1]))) {
                bookList.unshift(tokens[1]);
            }
        }
        if (command === "Insert Book") {
            if (!(bookList.includes(tokens[1]))) {
                bookList.push(tokens[1]);
            }
        }
        if (command === "Take Book") {
            if (bookList.includes(tokens[1])) {
                let indexOfItem = bookList.indexOf(tokens[1])
                bookList.splice(indexOfItem, 1);
            }
        }
        if (command === "Swap Books") {
            if (bookList.includes(tokens[1]) && bookList.includes(tokens[1])) {
                let indexOfFirstBook = bookList.indexOf(tokens[1])
                let indexOfSecondBook = bookList.indexOf(tokens[2])
                let temp = bookList[indexOfFirstBook];
                bookList[indexOfFirstBook] = bookList[indexOfSecondBook];
                bookList[indexOfSecondBook] = temp;
            }
        }
        if (command === "Check Book") {
            let indexOfItem = Number(tokens[1]);
            if(bookList[indexOfItem]!==undefined) {
                console.log(bookList[indexOfItem]);
            }
        }

    }
    console.log(bookList.join(", "));
}

/* school(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]); */

school(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 4",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);

/* school(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);


school(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Add Book | Added Book",
    "Insert Book | Inserted Book",
    "Done"]); */
