//alexander maat

//section 01

//this program will generate a random score for BYU and Gonzaga and give the result of the game, who won or if it was a tie

//declare your variables

let myScore;
let opponenetScore;
let result;

//insert your code below to declare variables

myScore = Math.floor(Math.random() * 101);
opponenetScore = Math.floor(Math.random() * 101);

//insert your code below to determine who wins

//if my score is greater than opponent score, result is BYU wins
//if opponent score is greater than my score, result is Gonzaga wins
//else result is it was a tie
if (myScore > opponenetScore) {
  result = "BYU wins!";
} else if (myScore < opponenetScore) {
  result = "Gonzaga wins!";
} else {
  result = "It was a tie!";
}

//display the results using an alert box

alert("BYU: " + myScore + "\nGonzaga: " + opponenetScore + "\n\n" + result);
