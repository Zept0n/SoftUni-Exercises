function validity(p1,p2,p3,p4) {
    let x1=Number(p1);
    let y1=Number(p2);
    let x2=Number(p3);
    let y2=Number(p4);
    let x0=0;
    let y0=0;
    function isValid(x1,y1,x2,y2) {
        let distance=Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
        let isValid=distance%1===0;
        return isValid?'valid' :'invalid';
    }
    console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is ${isValid(x1,y1,x0,y0)}`)
    console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is ${isValid(x2,y2,x0,y0)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(x1,y1,x2,y2)}`)
}

validity(3, 0, 0, 4);
validity(2, 1, 1, 1);
