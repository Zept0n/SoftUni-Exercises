function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let arrayOfObjects=JSON.parse(input);
    let result=[];
    for(let index=0;index<arrayOfObjects.length;index++) {
        const currentObject=arrayOfObjects[index];
        const currentArea=area.call(currentObject);
        const currentVolume=vol.call(currentObject);
        const newObj={
            area:currentArea,
            volume:currentVolume
        }
        result.push(newObj);
    }
    return result;
}

/*
 function areaVol(area, vol, input) {
    return JSON.parse(input).map(cube=> ({
        area:area.call(cube),
        volume:vol.call(cube)
    }));
} 
*/

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
);