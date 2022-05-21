function timeWalk(steps, footprintLength, speedKmh) {
    let distanceInMeters=steps*footprintLength;
    let speed=speedKmh*1000/3600;
    let rest=Math.floor(distanceInMeters/500)*60;
    let time=(distanceInMeters/speed) + rest;
    
    let hours=String(Math.floor(time/3600)).padStart(2,"0");
    let min=String(Math.floor(time/60)).padStart(2,"0");
    let seconds=(time%60).toFixed(0).padStart(2,"0");

    console.log(`${hours}:${min}:${seconds}`)

}

timeWalk(4000, 0.60, 5);
timeWalk(2564, 0.70, 5.5);


