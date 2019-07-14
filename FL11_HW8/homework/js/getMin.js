let getMin = function(...numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
getMin();