function sum(arr, start, end) {
    let sum = 0;
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    if (start < 0) {
        start = 0;
    }
    for (let index = start; index <= end; index++) {
        sum += Number(arr[index]);
    }
    return sum;
}

sum([10, 20, 30, 40, 50, 60], 3, 300);
sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
sum([10, 'twenty', 30, 40], 0, 2);
sum([], 1, 2);
sum('text', 0, 2);
