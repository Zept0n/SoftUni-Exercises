function sort(input){
    let secondSort=input.sort((a,b)=>a.localeCompare(b));
    let firstSort=input.sort((a, b) => a.length - b.length);
    console.log(firstSort.join("\n"));

    
    
}

/* function sort(input){
    let firstSort=input.sort((a,b)=>a.localeCompare(b)).sort((a, b) => a.length - b.length)
    console.log(firstSort.join("\n"));
    
} */

sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);