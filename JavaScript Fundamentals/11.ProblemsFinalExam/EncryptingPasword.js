function encrypting(input) {
    let n=input.shift();
    for (let index=0;index<n;index++){
        let text=input[index];
        //let regex=/([\S]+)>(?<numbers>[0-9]+)\|(?<lowerCase>[a-z]+)\|(?<upperCase>[A-Z]+)\|(?<symbolGroup>[^<>\s]+)<\1$/g;
        let regex=/(.+)>(?<numbers>[0-9]{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbolGroup>[^<>\s]{3})<\1$/g;
        let match=regex.exec(text);
        if (match!=null) {
            let encryptedPassword=match.groups.numbers+match.groups.lowerCase+match.groups.upperCase+match.groups.symbolGroup;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log("Try another password!");
        }
    }
}

encrypting((["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])
);
encrypting((["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
);