let fName = prompt("What is your first name?: ");
let lName = prompt("What is your last name?: ");
let iAge = parseInt(prompt("How old are you?: "));
let sPlay = "Y";

if (iAge < 18) {
  alert("You must be at least 18 to play");
} else {
  while (sPlay == "Y") {
    let sGuess = parseInt(prompt("Guess a number between 1 and 20"));
    let iCorrect = Math.floor(Math.random() * 20) + 1;
    let iCount = 1;

    while (true) {
      if (sGuess > iCorrect) {
        sGuess = parseInt(prompt("To high, guess again: "));
        iCount += 1;
      } else if (sGuess < iCorrect) {
        sGuess = parseInt(prompt("Too low, try again: "));
        iCount += 1;
      } else {
        alert("You guessed it! It took " + iCount + " tries!");
        iCount += 1;
        break;
      }
    }
    sPlay = prompt("Would you like to play again? (Y/N)").toUpperCase();
  }
}
