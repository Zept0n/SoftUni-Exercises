function arrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currentNum=array.shift();
        array.push(currentNum);
    }
    console.log(array.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2);