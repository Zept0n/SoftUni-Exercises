function solve(input) {
    let Sum=0;
    let inverseSum=0
    let concString='';
    for (let index=0;index<input.length;index++) {
        Sum+=input[index];
        inverseSum+=1/input[index];
        concString+=input[index];
    }
    console.log(`${Sum}\n${inverseSum}\n${concString}`);
}
solve([1,2,3]);