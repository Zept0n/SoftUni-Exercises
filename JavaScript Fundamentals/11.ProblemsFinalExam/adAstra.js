function astra(input) {
    let text=input[0];
    let pattern=/([/|#]+)(?<itemName>[a-zA-Z\s]+)\1(?<expDate>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g;
    let match=pattern.exec(text);
    let totalCalories=0;
    let itemsArray=[];
    while(match!=null) {
        let itemName=match.groups.itemName;
        let expDate=match.groups.expDate;
        let calories=match.groups.calories;
        totalCalories+=+calories;
        itemsArray.push(`Item: ${itemName}, Best before: ${expDate}, Nutrition: ${calories}`);
        match=pattern.exec(text);
    }
    let days=Math.floor((totalCalories/2000));
    console.log(`You have food to last you for: ${days} days!`)
    for (let index=0;index<itemsArray.length;index++) {
        console.log(itemsArray[index]);
    }
}

astra([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);
astra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);

astra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);