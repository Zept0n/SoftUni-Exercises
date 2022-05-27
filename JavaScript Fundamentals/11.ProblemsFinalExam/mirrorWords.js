function solve(input) {
    let text=input[0];
    let pattern=/([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let match=pattern.exec(text);
    let count=0;
    let resultArray=[];
    while(match!=null) {
        count++;
        let firstWord=match.groups.firstWord;
        let secondWord=match.groups.secondWord;
        let reversedSecond=secondWord.split("").reverse().join("")
        if (firstWord===reversedSecond) {
            resultArray.push(`${firstWord} <=> ${secondWord}`)
        }
        match=pattern.exec(text);
    }
    if (count<=0) {
        console.log("No word pairs found!");
    }
    else {
        console.log(`${count} word pairs found!`)
    }
    if (resultArray.length==0) {
        console.log(`No mirror words!`)
    }
    else {
        console.log(`The mirror words are:`)
        console.log(resultArray.join(", "))
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    );
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);