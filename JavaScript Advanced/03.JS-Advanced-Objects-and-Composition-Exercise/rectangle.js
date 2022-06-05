function rectangle(width,height,color) {
    color=color.split("");
    color[0]=color[0].toUpperCase();
    color=color.join("")

    return {
        width,
        height,
        color,
        calcArea:function() {
            return this.width*this.height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
rect.height=6;
console.log(rect.calcArea());
