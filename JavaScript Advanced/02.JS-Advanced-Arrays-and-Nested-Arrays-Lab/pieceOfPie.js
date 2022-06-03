function pie(pieArray,firstPie,secondPie) {
    let resultArray=[];
    let indexofFirstPie=pieArray.indexOf(firstPie);
    let indexofSecondPie=pieArray.indexOf(secondPie);

   /*  for (let i=indexofFirstPie;i<=indexofSecondPie;i++) {
        resultArray.push(pieArray[i]);
    } */

    resultArray=pieArray.splice(indexofFirstPie,indexofSecondPie);
    return resultArray;
}
pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
