function arguments(...params) {
    let obj={};
    for(let index=0;index<params.length;index++) {
        let type=typeof params[index];
        console.log(`${type}: ${params[index]}`);
        if (obj.hasOwnProperty(type)==false) {
            obj[type]=0;
        }
        obj[type]++;
    }

    let sorted=Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    for (let [key,value] of sorted) {
        console.log(key+" = "+value)
    }
    
}


arguments(
    'cat',
    42,
    function () { console.log('Hello world!'); }
)