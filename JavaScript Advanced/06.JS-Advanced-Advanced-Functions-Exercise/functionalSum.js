function add(n) {
    const inner = function (number) {
        n+=number
        return inner;
    };
    inner.toString=function() {
        return n;
    };
    return inner;
}

add(1)