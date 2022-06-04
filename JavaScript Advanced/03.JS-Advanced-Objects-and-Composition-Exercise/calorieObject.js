function calorie(array) {
    let result={};
    for(let index=0;index<array.length;index+=2) {
        let currentFoodName=array[index];
        let currentFoodCalories=Number(array[index+1]);
        result[currentFoodName]=currentFoodCalories;
    }
    console.log(result)
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
