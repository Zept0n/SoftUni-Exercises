function users(input) {
    let resultObj={};
    for (let line of input) {
        let [company,userID]=line.split(" -> ");

        if (!resultObj.hasOwnProperty(company)){
            resultObj[company]=new Set();
        }
        resultObj[company].add(userID);
    }
    let sorted=Object.entries(resultObj).sort((a,b)=>a[0].localeCompare(b[0]));
    for (let tuple of sorted){
        console.log(tuple[0]);
        for (let user of tuple[1]){
            console.log(`-- ${user}`);
        }
    }
}

users([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );
users([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );