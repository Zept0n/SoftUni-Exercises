function min(number1,number2,number3) {
    let minNumber;
    if(number1<number2&&number1<number3) {
        minNumber=number1;
    }
    else if(number2<number1&&number2<number3) {
        minNumber=number2;
    }
    else {
        minNumber=number3;
    }
    console.log(minNumber);
}

min(2,
    5,
    3
    )