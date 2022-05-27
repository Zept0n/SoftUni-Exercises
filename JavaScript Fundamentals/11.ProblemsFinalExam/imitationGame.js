function imitation(input) {
    let text=input.shift();
    while(input[0]!="Decode") {
        let tokens=input.shift().split("|");
        let command=tokens[0];
        let newText=""
        if (command==="ChangeAll") {
            let substring=tokens[1];
            let replacement=tokens[2];
            while(text.includes(substring)) {
                text=text.replace(substring,replacement);
            }
        } else if (command==="Insert") {
            let index=tokens[1];
            let value=tokens[2];
            newText=text.split("")
            newText.splice(index,0,value);
            text=newText.join("");
        } else if (command==="Move") {
            let numberOfLetters=tokens[1]
            newText=text.split("");
            let appendText=text.substring(0,numberOfLetters);
            newText.splice(0,numberOfLetters)
            newText=newText.join("")+appendText;
            text=newText;
            
        }
    }
    console.log(`The decrypted message is: ${text}`)
}

imitation([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);