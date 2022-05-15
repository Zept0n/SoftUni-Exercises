function matrix(number) {

    function matrixRowWithLength(number) {
        let matrixRow = "";
        for (let index = 0; index < number; index++) {
            matrixRow += number + " ";
        }
        console.log(matrixRow);

    }

    for (let index = 0; index < number; index++) {
        matrixRowWithLength(number);
    }
}

matrix(3);