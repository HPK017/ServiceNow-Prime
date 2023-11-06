
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;


while (true) {
  
  const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    console.log("Please enter a valid number between 1 and 100.");
  } else {

    attempts++;


    if (userGuess === randomNumber) {
      console.log(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
      break; 
    } else if (userGuess < randomNumber) {
      console.log("Try a higher number.");
    } else {
      console.log("Try a lower number.");
    }
  }
}
