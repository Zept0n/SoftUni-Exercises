function secret(input) {
    let text=input.shift();
    let commands={
        InsertSpace,
        Reverse,
        ChangeAll
    }
    while (input[0]!=="Reveal") {
        let [name,parameter1,parameter2]=input.shift().split(":|:");
        //console.log(name,parameter1,parameter2);
        let command=commands[name];
        console.log(command)
        console.log(text,parameter1,parameter2)
        text=command(text,parameter1,parameter2);
    }
    console.log(`You have a new text message: ${text}`);

function InsertSpace(text,index) {
    let left=text.slice(0,index);
    let right=text.slice(index);
    let result=left+" "+right;
    console.log(result)
    return result;
}
function Reverse(text,substring) {
    let index=text.indexOf(substring)
    if (index!=-1) {
        let left=text.slice(0,index);
        let right=text.slice(index+substring.length);
        let reversedSubstring=substring.split("").reverse().join("")
        console.log(left+right+reversedSubstring);
        return left+right+reversedSubstring;
    }
    else {
        console.log("error");
    }
}
Reverse("Howareyou?","")
function ChangeAll(text,substring,replacement) {
    let result=text.split(substring).join(replacement);
    console.log(result);
    return result;
}
}


/* secret([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']); */

    secret([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);