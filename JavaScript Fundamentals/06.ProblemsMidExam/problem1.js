function reception(input) {
    let studentsCount=Number(input.pop());
/*     let rep1=Number(input.shift());
    let rep2=Number(input.shift());
    let rep3=Number(input.shift());
    let receptionistEfficiency=rep1+rep2+rep3 */

    let receptionistEfficiency=input.map(Number).reduce((x, y) => x + y, 0);


    let hoursNeeded=0;
    while (studentsCount>0){
        hoursNeeded++;
        if(hoursNeeded%4!==0){
            studentsCount-=receptionistEfficiency;
        }
    }
    console.log(`Time needed: ${hoursNeeded}h.`);
}

reception(['5','6','4','20']);
reception(['1','2','3','45']);