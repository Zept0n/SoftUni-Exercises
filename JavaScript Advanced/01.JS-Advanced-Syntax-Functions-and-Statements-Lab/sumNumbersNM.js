function solve(n,m) {
    n=Number(n);
    m=Number(m);
    let result=0;
    for (let i=n;i<=m;i++) {
        result+=i;
    }
    console.log(result);
}

solve(1,5);
solve("-8","20");