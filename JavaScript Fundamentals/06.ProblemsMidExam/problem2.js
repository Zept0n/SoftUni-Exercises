function modifier(array) {
    let arrayToModify=array.shift().split(" ").map(Number);

    while(array[0]!=="end"){
        let tokens=array[0].split(" ");
        let command=tokens[0];
        if (command==="decrease") {
         arrayToModify=arrayToModify.map((x) =>--x);
        } else {
          let firstIndex=Number(tokens[1]);
          let secondIndex=Number(tokens[2]);
          if (command==="swap") {
            let temp=arrayToModify[firstIndex];
            arrayToModify[firstIndex]=arrayToModify[secondIndex];
            arrayToModify[secondIndex]=temp;
          } else {
            arrayToModify[firstIndex]*=arrayToModify[secondIndex];
          }
        }
        array.shift();
    }


    console.log(arrayToModify.join(", "));
}

modifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );
modifier([
    '1 2 3 4',
    'swap 0 1', //2 1 3 4
    'swap 1 2', //2 3 1 4
    'swap 2 3', // 2 3 4 1 
    'multiply 1 2',
    'decrease', // 
    'end'
  ]
  );
