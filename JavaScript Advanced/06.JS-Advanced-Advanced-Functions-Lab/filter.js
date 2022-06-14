function solve(string, criteria) {
    const input = JSON.parse(string);
    let counter = 0;
    let [key, value] = criteria.split('-');
    //Filter and display with one iteration for every object
    for (let index = 0; index < input.length; index++) {
        const currentObject = input[index];
        if (isCoveringCriteria(currentObject)) {
            console.log(`${counter}. ${currentObject[`first_name`]} ${currentObject[`last_name`]} - ${currentObject['email']}`)
            counter++;
        }
    }

    //with filter
    // let result = input.filter(p => (p[key] == value));
    // for (i = 0; i < result.length; i++ ) {
    //     console.log(
    //         `${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`
    //     )
    // }

    function isCoveringCriteria(object) {
        /* if (criteria == 'all' || object[criteria[0]] === criteria[1]) {
            return true;
        } else {
            return false;
        } */
        return criteria == 'all' || object[key] === value;
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
);

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

)