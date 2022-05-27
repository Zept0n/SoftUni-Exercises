function solve(input) {
    let text = input.shift();
    while (input != "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let parameter1 = tokens[1];
        let parameter2 = tokens[2];
        if (command === "TakeOdd") {
            let newText = ""
            for (let index = 0; index < text.length; index++) {
                if (index % 2 === 1) {
                    newText += text[index];
                }
            }
            text = newText;
            console.log(text);
        } else if (command === "Cut") {
            /* text=text.split("");
            text.splice(parameter1,parameter2)
            text=text.join("")
            */
            text = text.replace(text.substring(parameter1, Number(parameter1) + Number(parameter2)), "")
            console.log(text)
        } else if (command === "Substitute") {
            if (text.includes(parameter1)) {
                text = text.split(parameter1).join(parameter2);
                console.log(text);
            }
            else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${text}`)
}

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);