function town(strArray) {
    let result = [];
    let [town, latitude, longitude] = strArray.shift().split(/[ ]?\|[ ]?/gm).filter(Boolean);
    for (let index = 0; index < strArray.length; index++) {
        let resultObj = {};
        const [townName, townLatitude, townLongitude] = strArray[index].split(/[ ]?\|[ ]?/gm).filter(Boolean);
        resultObj[town]=townName;
        resultObj[latitude]=Number(Number(townLatitude).toFixed(2));
        resultObj[longitude]=Number(Number(townLongitude).toFixed(2));
        result.push(resultObj);

    }
    return JSON.stringify(result);
}

console.log(town(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
console.log(town(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));
