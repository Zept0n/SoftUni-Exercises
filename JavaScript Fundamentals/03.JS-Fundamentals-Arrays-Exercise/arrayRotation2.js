function arrayRotation(array, rotations) {
    for (let j = 0; j < rotations; j++) {
        for (let i = array.length - 1; i >= 0; i--) {
            let temp = array[i];
            array[i] = array[0]
            array[0] = temp;
        }
    }
    console.log(array.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2);