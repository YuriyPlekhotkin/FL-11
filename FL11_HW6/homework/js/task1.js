// Your code goes here
const a1 = parseInt(prompt('Please enter a number a1', '0'), 10);
const a2 = parseInt(prompt('Please enter a number a2', '0'), 10);
const b1 = parseInt(prompt('Please enter a number b1', '0'), 10);
const b2 = parseInt(prompt('Please enter a number b2', '0'), 10);
const c1 = parseInt(prompt('Please enter a number c1', '0'), 10);
const c2 = parseInt(prompt('Please enter a number c2', '0'), 10);
const divider = 2;
const x = (a1 + b1) / divider;
const y = (a2 + b2) / divider;

if (x === c1 && y === c2) {
    console.log(true);
} else {
    console.log(false);
}