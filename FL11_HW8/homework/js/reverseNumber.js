function reverseNumber(number) {
    const revNum = number.toString().split('').reverse().join('');
    return parseInt(revNum) * Math.sign(number);
}
reverseNumber();