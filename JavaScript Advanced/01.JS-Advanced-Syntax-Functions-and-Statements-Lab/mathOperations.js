function solve(num1,num2,operator) {
    let result;
    switch(operator) {
        case '+': result=num1+num2;break;
        case '-': result=num1-num2;break;
        case '/': result=num1/num2;break;//error if num2 is 0;
        case '*': result=num1*num2;break;
        case '%': result=num1%num2;break;
        case '**': result=num1**num2;break;
    }
    console.log(result);
}

solve(0,5,"/");
solve(3,5.5,"*");