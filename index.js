console.log("hiwooo");

function generateRandomNumber() {
    let randomNum = Math.floor(Math.random() * 15) + 1


    // if...else if...else statement
    // if (condition) {block of code to execute}
    // =, ==, !=, >, <, > =, < =, &&, ||

    if(randomNum >= 15){
        console.log(`Random Number is >= to 15`)
    } else {
        console.log(`Random Number is <= to 15`)
    }


    return console.log(randomNum);

}