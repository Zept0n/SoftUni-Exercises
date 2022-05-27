function validator(input) {
    let password = input.shift();
    while (input[0] != "Complete") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let newPassword = ""
        if (command === "Make") {
            let commandSecondPart = p1;
            p2 = Number(p2);
            if (commandSecondPart === "Upper") {
                newPassword = password.split("");
                let letter = password.substring(p2, p2 + 1).toUpperCase();
                newPassword.splice(p2, 1, letter);
                password = newPassword.join("");
                console.log(password)
            } else if (commandSecondPart === "Lower") {
                newPassword = password.split("");
                let letter = password.substring(p2, p2 + 1).toLowerCase();
                newPassword.splice(p2, 1, letter);
                password = newPassword.join("");
                console.log(password)
            }

        } else if (command === "Insert") {
            let index = Number(p1);
            let char = p2;
            newPassword = password.split("");
            if (!(newPassword[index] == undefined)) {
                newPassword.splice(index, 0, char);
            }
            password = newPassword.join("");
            console.log(password)
        } else if (command === "Replace") {
            let char=p1;
            let value=Number(p2);
            let newChar=String.fromCharCode(char.charCodeAt(0)+value)
            if (password.includes(char)){
                newPassword=password.split(char).join(newChar);
                password = newPassword;
            }
            console.log(password)
        } else if (command === "Validation") {
            if (password.length<8) {
                console.log(`Password must be at least 8 characters long!`);
            }
            let regex1=/[^\w]/g;
            let match1=regex1.exec(password);
            if (match1!=null) {
                console.log(`Password must consist only of letters, digits and _!`)
            }
            let regex2=/[A-Z]/g;
            let match2=regex2.exec(password);
            if (match2===null) {
                console.log(`Password must consist at least one uppercase letter!`);
            }
            let regex3=/[a-z]/g;
            let match3=regex3.exec(password);
            if (match3===null) {
                console.log(`Password must consist at least one lowercase letter!`);
            }
            let regex4=/[0-9]/g;
            let match4=regex4.exec(password);
            if (match4===null) {
                console.log(`Password must consist at least one digit!`);
            }
        }
    }
}

 validator((['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
); 

validator((['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])
);