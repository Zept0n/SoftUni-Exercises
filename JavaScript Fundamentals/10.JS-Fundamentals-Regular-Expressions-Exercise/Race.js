function race(input) {
    let names = input.shift().split(", ");
    let racersObject = {};
    for (let line of input) {
        if (line === "end of race") {
            break;
        }
        let distance = 0;
        let currentName = line.match(/[A-Z]/gi).join("");
        let currentDistanceDigits = line.match(/\d/g).forEach(element => {
            distance += +element;
        });
        if (names.includes(currentName)) {
            if (!racersObject.hasOwnProperty(currentName)) {
                racersObject[currentName] = distance;
            }
            else {
                racersObject[currentName] += distance;
            }
        }
    }
    
    let sorted = Object.entries(racersObject).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`)
}
    /* let sorted=Object.entries(racersObject).sort((a,b)=>{
        console.log(a,b)
        return 0;
    })
     */
    //b[1]-a[1]);
    //    let sorted=Object.entries(resultObj).sort((a,b)=>b[1]-a[1]);

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);