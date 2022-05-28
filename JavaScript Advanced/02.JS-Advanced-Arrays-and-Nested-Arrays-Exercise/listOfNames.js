function solve(names) {
    let sorted=names.sort((a,b)=>a.localeCompare(b));
    for(let index=0;index<sorted.length;index++) {
        sorted[index]=`${index+1}.${sorted[index]}`;
    }
    console.log(sorted.join("\n"));
}

solve(["John", "Bob", "Christina", "Ema"]);

