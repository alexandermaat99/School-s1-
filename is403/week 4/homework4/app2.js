//Alexander Maat
//Section 001
// This program is designed to simulate a soccer season by prompting the user for their team name, the number of games to play,
// and opponent names, generating random scores for each game, calculating the team's wins and
// losses, determining tournament eligibility, and displaying the team's final
// record and tournament status.

let homeTeam = prompt("What is the name of your team? ");

let totalGames = parseInt(prompt("How many games make up your season? "));

let wins = 0;
let losses = 0;

for (let i = 1; i <= totalGames; i++) {
  let oppName = prompt("What is the name of your opponenet for game " + i);
  let homeScore = Math.floor(Math.random() * 10);
  let oppScore = Math.floor(Math.random() * 10);

  if (homeScore > oppScore) {
    wins++;
  } else if (homeScore < oppScore) {
    losses++;
  } else {
    while (homeScore == oppScore) {
      let homeScore = Math.floor(Math.random() * 10);
      let oppScore = Math.floor(Math.random() * 10);

      if (homeScore > oppScore) {
        wins++;
      } else if (homeScore < oppScore) {
        losses++;
      }
    }
  }
}
