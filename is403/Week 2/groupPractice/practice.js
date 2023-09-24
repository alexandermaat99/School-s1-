//collection of the required information and assigning varriables
let sFirstName = prompt("What is your first name?");
let sLastName = prompt("What is your last name?");
let iAge = parseInt(prompt("What is your age?"));
let iCount = 0;
let sPlay = "Y";

//validation of user age, if false, the program terminates
if (iAge < 18) {
  alert("You must be at least 18 to play");
} else {
  while (sPlay == "Y") {
    //generates a random number between 1 and 20
    let iCorrect = Math.floor(Math.random() * 20) + 1;
    //assigning new guess withing while statement to allow for multiple games
    let iGuess;

    //while loop to allow multiple guesses
    while (true) {
      iCount += 1;
      //collect guess from user
      iGuess = parseInt(prompt("Guess a number between 1 and 20"));

      //if statement to validate guess
      if (iGuess > iCorrect) {
        alert("Too high");
      } else if (iGuess < iCorrect) {
        alert("Too low");
      } else {
        alert("You guessed it! It took " + iCount + " guesses");
        break; // Exit the inner loop when the correct number is guessed
      }
    }
    //allows the user to play again or exit the program
    sPlay = prompt("Would you like to play again? (Y/N)").toUpperCase();
  }
}
