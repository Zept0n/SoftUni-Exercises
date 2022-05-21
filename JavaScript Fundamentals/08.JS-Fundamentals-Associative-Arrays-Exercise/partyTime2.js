function partyTime(arr) {
    function mapGenerator(arr) {
        let map = new Map();
        map.set('vip', []);
        map.set('regular', []);
        for (const e of arr) {
            if (e != 'PARTY') {
                if (isNaN(e[0]) == false) {
                    map.set('vip', map.get('vip').concat(e));
                } else {
                    map.set('regular', map.get('regular').concat(e));
                }
            } else {
                break;
            }
        }
        return map;
    }
 
    function mapManipulator(map, arr) {
        for (const e of arr.slice(arr.indexOf("PARTY") + 1)) {
            if (isNaN(e[0]) == false) {
                let vips = map.get('vip')
                vips.splice(vips.indexOf(e), 1)
                map.set('vip', vips);
            } else {
                let reg = map.get('regular');
                reg.splice(reg.indexOf(e), 1);
                map.set('regular', reg);
            }
        }
        return map;
    }
    function outputParse(map) {
        let r = `${Array.from(map.values()).reduce((a, b) => a + b.length, 0)}\n`;
        for (const kvp of map) {
            r += `${kvp[1].join('\n')}\n`;
        }
        return r;
    }
    console.log(outputParse(mapManipulator(mapGenerator(arr), arr)));
}


partyTime([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
  ]);
  console.log(`---`);
  partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
  ]);
  console.log(`---`);
  partyTime([
    "IK9Yo0h",
    "NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "7IK9Yo0h",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "4Ce8vwPmE",
    "5SVQXQCbc",
    "6tSzE5t0p",
  ]);
   