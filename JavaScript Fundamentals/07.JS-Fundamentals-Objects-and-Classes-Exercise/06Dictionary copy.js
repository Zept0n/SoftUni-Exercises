function dictionary(input) {
    let arrayOfObjects=[];
    for (let index=0;index<input.length;index++) {
        // let inputAsString=input[index];
        let dictionary={};
        let currentTerm=input[index].split(/{"|":"|"}|$/g);
        let termName=currentTerm[1];
        let termDefinition=currentTerm[2];
        dictionary[termName]=termDefinition;
        arrayOfObjects.push(dictionary);
    }
    heroes.sort((a,b)=>a.level-b.level);
    for(let index=0;index<arrayOfObjects.length;index++) {
        console.log(arrayOfObjects[index]);
    }
    /* for (let key in dictionary) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    } */
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);
dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
]
);