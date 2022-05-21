function uppercaseWords(string) {
    let words=string.split(/[^a-zA-z0-9]+/g).filter(Boolean).map(a=>a.toLocaleUpperCase()).join(", ");
    console.log(words);
}

uppercaseWords('Hi, how are you?');
uppercaseWords('hello');
