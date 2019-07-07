// Your code goes here
const a = parseInt(prompt('Please enter a number a', '0'), 10);
const b = parseInt(prompt('Please enter a number b', '0'), 10);
const c = parseInt(prompt('Please enter a number c', '0'), 10);
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b !== c || a !== b === c) {
        console.log('Isosceles triangle');
    } else if (a !== b !== c) {
        console.log('Normal triangle');
    }

} else {
    console.log('Triangle doesn’t exist');
}