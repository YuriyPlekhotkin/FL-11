const defaultMultiplier = 8;
const defaultPrizeValue = 100;
const defaultAttemptsAmount = 3;
const multiplierStep = 4;
const priceValueIncreaseStep = 2;
const priceValueDecreaseStep = 2;

let multiplier = defaultMultiplier;
let prizeValue = defaultPrizeValue;

let totalPrize = 0;
let attempts;


if (confirm('Do you want to play a game?')) {
    let prize = 0;
    let keepPlay = true;
    while (keepPlay) {

        let goldNumber = Math.floor(Math.random() * (multiplier + 1));
        console.log('number: ' + goldNumber);
        for (attempts = 0; attempts < defaultAttemptsAmount; attempts++) {
            if (attempts === 0) {
                prize = prizeValue;
            } else {
                prize = prizeValue / (priceValueDecreaseStep * attempts);
            }
            let guessTurn = parseInt(prompt('Choose a roulette pocket number from 0 to ' + multiplier +
                '\nAttempts left: ' + attempts +
                '\nTotal prize: ' + totalPrize +
                '\nPossible prize on current attempt: ' + prize, '0'), 10);
            if (guessTurn === goldNumber) {
                break;
            }
            prize = 0;
        }



        totalPrize = totalPrize + prize;
        if (prize > 0) {
            alert('Congratulation, you won! Your prize is: ' + prize + '$.');
            keepPlay = confirm('Do you want to continue?');
            if (keepPlay) {
                multiplier += multiplierStep;
                prizeValue *= priceValueIncreaseStep;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            keepPlay = confirm('Do you wants to play again?');
            multiplier = defaultMultiplier;
            prizeValue = defaultPrizeValue;
        }

    }
} else {
    alert('You did not become a billionaire, but can.');

}