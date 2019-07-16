// Your code goes here
//task 0
let getNumbers = function(x) {
    let i, z = [];

    for (i = 0; i < x.length; i++) {
        let character = x.charAt(i);
        if (parseInt(character)) {
            z.push(character);
        }
    }

    return z;
}
getNumbers('n1um3ber95');

/*
alternative task 0
let getNumbers = function(x) {
    let i, y, z, arrayLength;
    y = [];
    z = [];
    y = x.split("");
    arrayLength = y.length;

    for (i = 0; i < arrayLength; i++) {
        if (parseInt(y[i])) {
            z.push(y[i]);
        }
    }

    return z;
}
getNumbers('n1um3ber95'); */



//task 1

let finalList;
let a, b, c, d, e, f, g;
let findTypes = function(...types) {

    for (let i = 0; i < types.length; i++) {

        if (typeof types[i] === 'number') {
            a = '(' + '\'number\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'string') {

            b = '(' + '\'string\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'boolean') {

            c = '(' + '\'boolean\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'symbol') {

            d = '(' + '\'symbol\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'undefined') {

            e = '(' + '\'undefined\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'object') {

            f = '(' + '\'object\'' + ':' + 1 + ')';
        } else if (typeof types[i] === 'function') {

            g = '(' + '\'symbol\'' + ':' + 1 + ')';

        }
    }
    finalList = a + b + c + d + e + f + g;
    return finalList;
}
let five = 5;
findTypes(null, five, 'hello');

//task 2