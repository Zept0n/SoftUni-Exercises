function triangle(number) {
    for (let index = 1; index <= number; index++) {
        let stringOfNum = '';
        for (let j = 1; j <= index; j++) {
            stringOfNum += index;
            if (j !== index) {
                stringOfNum += " ";
            }
        }
        console.log(stringOfNum);
    }
}
triangle(6);
triangle(3);
