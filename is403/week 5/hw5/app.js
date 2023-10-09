// Prompt the user to enter the number of teams
const numTeams = parseInt(prompt("How many teams?"));

// Check if the input is a valid number
if (isNaN(numTeams) || numTeams <= 0) {
  alert("No teams to display");
} else {
  // Initialize arrays to store team names and wins
  const teamNames = [];
  const teamWins = [];

  // Gather team names and generate random wins
  for (let i = 1; i <= numTeams; i++) {
    const teamName = prompt(`What is team ${i}'s name?`);
    teamNames.push(teamName);

    // Generate a random number between 0 and 25 for wins
    const wins = Math.floor(Math.random() * 26);
    teamWins.push(wins);
  }

  // Find the team with the most wins
  let maxWins = -1;
  let maxWinsTeam = "";

  for (let i = 0; i < numTeams; i++) {
    if (teamWins[i] > maxWins) {
      maxWins = teamWins[i];
      maxWinsTeam = teamNames[i];
    }
  }

  // Display the team with the most wins
  alert(`${maxWinsTeam} had the most wins with a record of ${maxWins}-1`);

  // Display all teams and their records
  let teamInfo = "";
  for (let i = 0; i < numTeams; i++) {
    teamInfo += `${teamNames[i]} ${teamWins[i]}-${25 - teamWins[i]}`;
    if (i < numTeams - 1) {
      teamInfo += "\n"; // Add newline character for separation
    }
  }

  alert(teamInfo);
}
