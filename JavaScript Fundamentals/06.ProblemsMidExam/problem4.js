function cupid(input) {
    let neighborhood = input.shift().split("@").map(Number);
    let currentIndex = 0;
    let successfulHouses=0
    while (input[0] !== "Love!") {
        let tokens = input.shift().split(" ");
        let jumpLength = Number(tokens[1]);
        currentIndex += jumpLength;
        if (currentIndex >= neighborhood.length) {
            currentIndex = 0;
        }
        if (neighborhood[currentIndex] == 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`)
        } else {
            neighborhood[currentIndex] -= 2;
            if (neighborhood[currentIndex] == 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
                successfulHouses++;
            }
        }
       // console.log(currentIndex + "---" + neighborhood);
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    if (successfulHouses===neighborhood.length) {
        console.log(`Mission was successful.`)
    }
    else {
        console.log(`Cupid has failed ${neighborhood.length-successfulHouses} places.`);
    }
}
cupid(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]
);
console.log("-------------------------------")
cupid(["2@4@2",  // 2 4 2
    "Jump 2", // 2 4 0
    "Jump 2", // 0 4 0
    "Jump 8", // 0 4 0
    "Jump 3", //
    "Jump 1",
    "Love!"]
);
console.log("-------------------------------")
cupid(["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"]
);