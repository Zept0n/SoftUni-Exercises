function strLen(str1,str2,str3) {
    let sumLength=(str1+str2+str3).length;
    let averageLength=Math.floor(sumLength/3);
    console.log(`${sumLength}\n${averageLength}`);
}

strLen('chocolate', 'ice cream', 'cake');