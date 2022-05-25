function solve(input) {
    //%(?<customer>[A-Z][a-z]+)%[^\|$%.]*<(?<product>\w+)>[^\|\$%.]*\|(?<quantity>\d+)\|[^\|$%.0-9]*(?<price>\d+(\.\d+)?)\$

    let allProductsTotalPrice=0;
    for(let line of input) {
        let regex=/%(?<customer>[A-Z][a-z]+)%[^\|$%.]*<(?<product>\w+)>[^\|\$%.]*\|(?<quantity>\d+)\|[^\|$%.0-9]*(?<price>\d+(\.\d+)?)\$/g
        let result=regex.exec(line)
        if (result) {
            let currentProductTotalPrice=+result.groups.quantity*+result.groups.price
            console.log(`${result.groups.customer}: ${result.groups.product} - ${currentProductTotalPrice.toFixed(2)}`)
            allProductsTotalPrice+=currentProductTotalPrice;
        }
        else if (line==="end of shift"){
            console.log(`Total income: ${allProductsTotalPrice.toFixed(2)}`)

        }
    }
}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);