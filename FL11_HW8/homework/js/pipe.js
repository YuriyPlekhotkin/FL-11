function pipe(num) {
    let i;
    for (i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }

    return num;
}

function addOne(x) {
    return x + x;
}

console.log(pipe(1, addOne, addOne, addOne));