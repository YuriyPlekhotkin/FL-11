// Your code goes here
var a1 = parseInt(prompt("Please enter a number a1", "0"), 10);
var a2 = parseInt(prompt("Please enter a number a2", "0"), 10);
var b1 = parseInt(prompt("Please enter a number b1", "0"), 10);
var b2 = parseInt(prompt("Please enter a number b2", "0"), 10);
var c1 = parseInt(prompt("Please enter a number c1", "0"), 10);
var c2 = parseInt(prompt("Please enter a number c2", "0"), 10);

var x = (a1 + b1) / 2;
var y = (a2 + b2) / 2;

if (x == c1 && y == c2) {
    console.log(true);
} else {
    console.log(false);
}