console.log("hiwooo");
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;


function generateRandomNumber(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;


    // if...else if...else statement
    // if (condition) {block of code to execute}
    // =, ==, !=, >, <, > =, < =, &&, ||

    if (randomNum <= 15) {
        B = true;
        console.log(`Random Number ${randomNum} is in B. 1-15`);

    } else if (randomNum >= 16 && randomNum <= 30) {
        I = true;
        console.log(`Random Number ${randomNum} is in I. 16-30`);

    } else if (randomNum >= 31 && randomNum <= 45) {
        N = true;
        console.log(`Random Number ${randomNum} is in N. 31-45`);

    } else if (randomNum >= 46 && randomNum <= 60) {
        G = true;
        console.log(`Random Number ${randomNum} is in G. 46-60`);

    } else if (randomNum >= 61 && randomNum <= 75) {
        O = true;
        console.log(`Random Number ${randomNum} is in O. 61-75`);

    } else {
        console.log(`Random Number is invalid`);
    }
    if (B && I && N && G && O) {
        console.log(`Bingo!`);
    }
}

function EZBingo() {
    let max = 75;
    while (!(B && I && N && G && O)) {
        generateRandomNumber(max);
    }
}
window.onload = EZBingo;