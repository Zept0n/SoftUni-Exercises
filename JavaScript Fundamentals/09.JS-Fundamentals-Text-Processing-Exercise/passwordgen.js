function generator(input) {
let [firstString,secondString,word]=input;
let fullString=firstString+secondString
let wordIndex=0;
let vowelArray=["a", "e", "i", "o", "u"]
let resultArray=[]
for (let index=0;index<fullString.length;index++) {
    //console.log(fullString[index]);
    //console.log(word[wordIndex]);
    if (vowelArray.includes(fullString[index])) {
        resultArray.push(word[wordIndex].toUpperCase());
        //console.log(fullString[index]," ",word[wordIndex]);
        wordIndex++;
    }
    else {
        resultArray.push(fullString[index]);
    }
    
    if(wordIndex>word.length-1) {
        wordIndex=0;
    }
}
console.log(`Your generated password is \n${resultArray.reverse().join("")}`)
}

generator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
);
generator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]

);
generator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]
);