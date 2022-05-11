function vacation(group, type, day) {
    let price = 0;
    let sum = 0;

    switch (day) {
        case 'Friday':
            if (type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.90;
            } else if (type === "Regular") {
                price = 15;
            } break;
        case 'Saturday':
            if (type === "Students") {
                price = 9.80;
            } else if (type === "Business") {
                price = 15.60;
            } else if (type === "Regular") {
                price = 20;
            }break;
        case 'Sunday':
            if (type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else if (type === "Regular") {
                price = 22.50;
            }break;
    }
    sum = group * price;

    if (group >= 30 && type === "Students") {
        sum = sum - (sum * 0.15);
    }
    if (group >= 100 && type === "Business") {
        sum = sum - (10 * price)
    }
    if (group >= 10 && group <= 20 && type === "Regular") {
        sum = sum - (sum * 0.05)
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday")