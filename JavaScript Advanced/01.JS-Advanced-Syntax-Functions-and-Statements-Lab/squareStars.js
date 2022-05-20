function solve(size) {
    if (size === undefined) {
        size=5;
    } 
    for (let i = 0; i < size; i++) {
        let string='';
        for(let j=0;j<size;j++) {
            string+='* ';
        }
        console.log(string);
        //console.log("* ".repeat(size));
    }
}

solve(9)