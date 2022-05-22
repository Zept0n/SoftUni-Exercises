function hash(string) {
    words=string.split(" ");
    for(word of words) {
        if (word.includes("#")&&word.length>1) {
            let toDisplay=true;
            for (let index=1;index<word.length;index++) {
                if (((word.charCodeAt(index)>=65&&word.charCodeAt(index)<=90)||
                    (word.charCodeAt(index)>=97&&word.charCodeAt(index)<=122)
                    )===false) {
                    toDisplay=false;
                }
            }
            if (toDisplay) {
                console.log(word.substring(1))
            }
        }
    }
}

hash('Nowadays everyone uses # to tag a #special word in #socialMedia');
hash('The symbol # is known #variously in English-speaking #regions as the #number sign');