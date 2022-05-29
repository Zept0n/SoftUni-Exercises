function solve(stringArray) {
    let sorted=stringArray.sort((a,b)=>a.localeCompare(b)).sort((a,b)=>a.length-b.length)

    // let sorted=stringArray.sort((a,b)=> {
    //     return a.length-b.length||a.localeCompare(b)
    // }); 
 
    console.log(sorted.join("\n"));
}

solve(['alpha',
    'beta',
    'gamma']
);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);
solve(['test',
    'Deny',
    'omen',
    'Default']
);
