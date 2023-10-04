//Alexander Maat
//Section 001
// This program is designed to simulate a soccer season by prompting the user for their team name, the number of games to play,
// and opponent names, generating random scores for each game, calculating the team's wins and
// losses, determining tournament eligibility, and displaying the team's final
// record and tournament status.

//get the users name
let userName = prompt("Please enter the name of your team: ");

//ask the user the number of games in the season and pass it as an int
let totalGames = parseInt(prompt("How many games are in the season?: "));

//set all the variables
let wins = 0;
let losses = 0;

//set up a loop to loop through for the number of games user provided
for (let i = 1; i <= totalGames; i++) {
  //ask the user for the name of the oponnent
  let opponenetTeam = prompt(
    "What is the name of your opponenet for game " + i
  );

  //generate the random scores for each time
  let teamScore = Math.floor(Math.random() * 10);
  let opponentScore = Math.floor(Math.random() * 10);

  //determine the winner of the game
  if (teamScore > opponentScore) {
    wins++;
  } else if (teamScore < opponentScore) {
    losses++;
  } else {
    //handle ties with a while loop
    while (teamScore == opponentScore) {
      let teamScore = Math.floor(Math.random() * 10);
      let opponentScore = Math.floor(Math.random() * 10);
      if (teamScore > opponentScore) {
        wins++;
      } else if (teamScore < opponentScore) {
        losses++;
      }
    }
  }
}

// gives the wins and losses for the whole season
alert(userName + " " + wins + "-" + losses);

// gives the win percentage
let winPercentage = wins / totalGames;
alert(winPercentage);

//determines their outcome based on their win percentage
