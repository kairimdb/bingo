console.log("hiwooo");

generateRandomNumber(15);
function generateRandomNumber(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;


    // if...else if...else statement
    // if (condition) {block of code to execute}
    // =, ==, !=, >, <, > =, < =, &&, ||

    if (randomNum <= 15) {
        return console.log(`Random Number ${randomNum} is in B. 1-15`);

    } else if (randomNum >= 16 && randomNum <= 30) {
        return console.log(`Random Number ${randomNum} is in I. 16-30`);

    } else {
        return console.log(`Random Number is invalid`);
    }

    // switch(randomNum){
    // case 1:
    //     console.log(`Random Number is in B.`)
    //     break;


    //  case 16:
    //     console.log(`Random Number is in I.`)
    //     break;


    //  case 31:
    //     console.log(`Random Number is in N.`)
    //     break;

    // case 46:
    //     console.log(`Random Number is in G.`)
    //     break;


    // case 61:
    //     console.log(`Random Number is in O.`)
    //     break;

}
//}