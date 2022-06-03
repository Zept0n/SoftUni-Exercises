function odd(arr) {
    return arr.filter((element,index)=>index%2!=0).reverse().map((element)=>element*2);
}

odd([10, 15, 20, 25]);
odd([3, 0, 10, 4, 7, 3]);
