function lift(input) {
    let peopleInQueue = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number);
    let filledWagons = 0;
    for (let index = 0; index < wagons.length; index++) {
        //if(wagons[index]<4){}
        wagons[index] += peopleInQueue;
        peopleInQueue=wagons[index];
        if (wagons[index] >= 4) {
            wagons[index] = 4;
            filledWagons++;
        }
        peopleInQueue -= wagons[index];
        if(peopleInQueue<=0){
            break;
        }

    }
    

    if(filledWagons<wagons.length) {
        console.log("The lift has empty spots!");
    }
    else if (filledWagons>=wagons.length&&peopleInQueue>0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
    }

    console.log(wagons.join(" "));
}

lift([
    "15",
    "0 0 0 0 0"
]
);

lift([
    "12",
    "0 0 0"
]
)