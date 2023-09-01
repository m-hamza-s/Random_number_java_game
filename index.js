// ===================== EXCERCISE NO 1=================
const prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * 100);

function checkGuess(userGuess) {
  if (userGuess === randomNumber) {
    return "Correct: You Guessed the right number";
  } else if (userGuess < randomNumber) {
    return "LESSER : your guessed number is lesser than original";
  } else {
    return "GREATER: your guessed number is greater than original";
  }
}
//Main game loop
while (true) {
  const userInput = prompt(
    "Guess the number between 1 and 100 (or type `quit` to `exit` :"
  );
  if (userInput === "quit") {
    break;
  }

  const userGuess = parseInt(userInput);

  if (isNaN(userGuess)) {
    console.log("Please enter a valid number.");
  } else if (userGuess === randomNumber) {
    console.log(`The random number was ${randomNumber}. Thanks for playing!`);
    break;
  } else {
    const result = checkGuess(userGuess);
    console.log(result);
  }
}
