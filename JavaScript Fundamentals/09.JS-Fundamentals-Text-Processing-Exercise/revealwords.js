function revealWords(words, text) {
    words=words.split(", ");
    
    for(let word of words) {
        text=text.replace("*".repeat(word.length),word);
    }
    console.log(text);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);