function road(speed, area) {
    speed = Number(speed);
    let speedLimit = 0;
    switch (area) {
        case "motorway": speedLimit = 130; break;
        case "interstate": speedLimit = 90; break;
        case "residential": speedLimit = 20; break;
        case "city": speedLimit = 50; break;
    }
    let difference= speed-speedLimit;
    if (difference>0) {
        let status='speeding';
        status=(difference>40)?'reckless driving'
              :(difference>20)?'excessive speeding':"speeding";
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
   
}

road(40, 'city');
road(21, 'residential');
road(120, 'interstate');
road(200, 'motorway');