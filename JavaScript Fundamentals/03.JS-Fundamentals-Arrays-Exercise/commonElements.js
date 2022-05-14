function commonElements(array,array2) {
    for (let i =0 ; i<array.length; i++) {
        for (let j=0; j<array2.length;j++) {
            if (array[i]===array2[j]) {
                console.log(array[i]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);