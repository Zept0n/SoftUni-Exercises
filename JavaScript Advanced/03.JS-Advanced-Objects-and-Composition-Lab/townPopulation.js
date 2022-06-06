//create function 
function town(array) {
    //create object to put the towns into
    let towns = {};
    //iterate over the array with towns
    for (let index = 0; index < array.length; index++) {
        //tokenize the array index value into two variables
        let [townName, townPopulation] = array[index].split(" <-> ");
        //if the towns object doesn't have a property that is the same as the one from the input array
        //--create one with the given population
        if (!(towns.hasOwnProperty(townName))) {
            towns[townName] = Number(townPopulation);
            //otherwise add the townPopulation to the existing population in the object
        } else {
            towns[townName] += Number(townPopulation);
        }
    }
    //destruct the array of entries(key,value) that come from the object towns
    //and iterate over them
    for (let [town, pop] of Object.entries(towns)) {
        //print the townName and townPopulation
        console.log(`${town} : ${pop}`);
    }
}

town(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

town(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);