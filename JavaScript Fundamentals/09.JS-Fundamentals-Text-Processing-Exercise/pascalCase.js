function pascal(input) {
    let s2 = input.toLowerCase();
    let result="";
    for(let i=0; i<input.length; i++) {
        if(input[i]!==s2[i]) {
            result = result + ' ' +input[i];
        }
        else {
            result = result + s2[i];
        }
     }
    console.log(result.trim().split(" ").join(", "));
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascal('HoldTheDoor');
pascal('ThisIsSoAnnoyingToDo');