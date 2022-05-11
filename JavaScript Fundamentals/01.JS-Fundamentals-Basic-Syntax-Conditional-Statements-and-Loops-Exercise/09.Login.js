//The split() method splits a String object into an array of string by separating the string into sub strings.
//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
//The join() method joins all elements of an array into a string.

function login(input) {
    let username=input[0];
    var password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let i=1;i<=input.length-1;i++) {
        if(i>3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if(input[i]===password) {
            console.log(`User ${username} logged in.`);
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }
        
    }

}

login(['Acer','login','go','let me in','recA']);