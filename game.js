
console.log("Hi there!");
// create secretb number
var secretNum = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// check if guess is correct
if(guess === secretNum) {
    console.log("You are correct!!!!");
}
// otherwise check if higher
else if(guess > secretNum) {
    console.log("Too much number, must less more");
}  
// otherwise check if lower
else {
    console.log("You too small, you must embiggen your number");
}

