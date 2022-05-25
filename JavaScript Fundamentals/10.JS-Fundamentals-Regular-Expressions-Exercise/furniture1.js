function furniture(input) {
    console.log("Bought furniture:");
    let totalPrice=0;
    while(input[0]!=="Purchase") {
        let text=input.shift().trim();
        //>>[A-Z][A-Za-z\s]+<<[\d]+(.\d+)?![\d]+
        //>>[A-Z][A-Za-z\s]+<<[\d]+\.{0,1}[\d]{0,}![\d]+
        if (/>>[A-Z][A-Za-z\s]+<<[\d]+(.\d+)?![\d]+/.test(text)) {
            //let [productName,price,quantity]=text.split(/[>>]+|[<<]+|[!]+/).filter(Boolean);
            let test=text.split(/[>>]+|[<<]+|[!]+/);
            console.log(test);
            //totalPrice+=Number(price)*Number(quantity);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!0',
    '>>TV<<300!0',
    '>Invalid<<!5',
    'Purchase']
);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);