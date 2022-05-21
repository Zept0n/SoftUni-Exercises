function solve(...input) {
    let number=Number(input.shift());
    let arrLength=input.length;
    for(let index=0;index<arrLength;index++) {
        let currentCommand=input[index];
        if (currentCommand==="chop") {
            number/=2;
        } else if(currentCommand==="dice") {
            number=Math.sqrt(number);
        } else if(currentCommand==="spice") {
            number+=1;
        } else if(currentCommand==="bake") {
            number*=3;
        } else if(currentCommand==="fillet") {
            number-=number*0.2;
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')