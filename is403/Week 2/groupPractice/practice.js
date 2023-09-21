let sFirstName = prompt("What is your first name?");
let sLastName = prompt("What is your last name?");
let iAge = parseInt(prompt("What is your age?"));
let iCount = 0;
let sPlay = "Y";

if (iAge < 18) {
    alert("You must be at least 18 to play");
} else {
    while (sPlay == "Y") {
        let iCorrect = Math.floor(Math.random() * 20) + 1;
        let iGuess;
        
        while (true) {
            iCount += 1;
            iGuess = parseInt(prompt("Guess a number between 1 and 20"));
    
            if (iGuess > iCorrect) {
                alert("Too high");
            } else if (iGuess < iCorrect) {
                alert("Too low");
            } else {
                alert("You guessed it! It took " + iCount + " guesses");
                break; // Exit the inner loop when the correct number is guessed
            }
        }
        
        sPlay = prompt("Would you like to play again? (Y/N)");
    }
}
