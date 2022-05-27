function solve(input) {

    for (let index=1;index<input.length;index++) {
        let productGroup="";
        let text=input[index];
        let pattern=/@#+(?<barcodeText>[A-Z]+[A-Za-z0-9]{4,}[A-Z]+)@#+/g
        let match=pattern.exec(text);
        if (match!=null) {
            let barcode=match.groups.barcodeText;
            let regex=/\d+/g;
            let match2=regex.exec(barcode)
            if (match2==null) {
                productGroup="00";
            }
            while (match2!=null) {
                productGroup+=match2[0];
                match2=regex.exec(barcode);
            }
            
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log("Invalid barcode")
        }
    }

}

solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
)
solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);