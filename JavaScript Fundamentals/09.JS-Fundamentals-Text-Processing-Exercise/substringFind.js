/* function substring(word,text) {
    if (text.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
        console.log(word);
    }
    else {
        console.log(`${word.toLocaleLowerCase()} not found!`)
    }
}
 */

function substring(word,text) {
    let textWords=text.split(" ");
    for(let index=0;index<textWords.length;index++) {
        if (textWords[index].toLocaleLowerCase()===word.toLocaleLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word.toLocaleLowerCase()} not found!`)
    
}

substring('javascript',
'JavaScript is the best programming language'
);
substring('python',
'JavaScript is the best programming language'
);