function partyTime(array) {
    let guestList = {
      vip: [],
      regular: [],
    };
   
    while (array[0] !== "PARTY") {
      let invited = array.shift();
      let isVip = invited[0];
   
      if (isNaN(isVip) === false) {
        guestList.vip.push(invited);
      } else {
        guestList.regular.push(invited);
      }
    }
   
    for (let i = 1; i < array.length; i++) {
      const currGuest = array[i];
   
      if (guestList.vip.includes(currGuest)) {
        let searchInvitation = guestList.vip.indexOf(currGuest);
        guestList.vip.splice(searchInvitation, 1);
      } else if (guestList.regular.includes(currGuest)) {
        let searchedIndex = guestList.regular.indexOf(currGuest);
        guestList.regular.splice(searchedIndex, 1);
      }
    }
   
    let invitationsLeft = guestList.vip.length + guestList.regular.length;
   
    console.log(invitationsLeft);
    guestList.vip.forEach((vip) => console.log(vip));
    guestList.regular.forEach((regular) => console.log(regular));
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
   