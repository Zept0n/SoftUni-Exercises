function word(input) {
    let resultObj={};
    let words=input.shift().split(" ");
    for (let index=0;index<words.length;index++){
        let currentWord=words[index];
        resultObj[currentWord]=0;
    }
    for (let index=0;index<input.length;index++){
        let currentWord=input[index];
        if(resultObj.hasOwnProperty(currentWord)) {
            resultObj[currentWord]++;
        }
    }
    let sorted=Object.entries(resultObj).sort((a,b)=>b[1]-a[1]);
    for (let [word,count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

word([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
word([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);