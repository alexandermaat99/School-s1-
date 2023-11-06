//alexander maat
//section 001
//This program asks the user for number of games, names of teams, then randomly generates scored for those games
//and displays their results in a table

// prompt the user to input the number of teams (validate input with parseInt)
let numTeams = parseInt(prompt("How many teams?: "));
// assure that user has entered a valid number
if (isNaN(numTeams) || numTeams <= 0) {
  alert("No teams to display");
}

// Create two empty arrays to store team names and their corresponding number of wins.
else {
  let TeamNames = [];
  let TeamWins = [];
  // Loop through each team to collect their names from the user.
  for (let iCount = 0; iCount < numTeams; iCount++) {
    let InputTeamNames = prompt(
      "Enter the name of team " + (iCount + 1) + ": "
    );
    // Add each input to the TeamNames array.
    TeamNames.push(InputTeamNames);
    // Generate a random number to represent the total wins for that team.
    let randomWin = Math.floor(Math.random() * 26);
    // Store this number in the TeamWins array.
    TeamWins.push(randomWin);
  }
  // Initialize maxWins as -1 to ensure a valid comparison within the loop.
  let maxWins = -1;
  // Use a loop to find the team with the most wins.
  for (let iSearch = 0; iSearch < numTeams; iSearch++) {
    if (TeamWins[iSearch] > maxWins) {
      maxWins = TeamWins[iSearch];
      teamWithMostWins = iSearch;
    }
  }
  // Calculate the number of losses for the team with the most wins.
  let maxLosses = 25 - maxWins;
  // Display a message to the user indicating the winning team and its record.
  alert(
    TeamNames[teamWithMostWins] +
      " had the most wins with a record of " +
      TeamWins[teamWithMostWins] +
      "-" +
      maxLosses
  );
  // Generate a list of all the teams and their respective losses.
  let allTeams = "";
  for (let iCount = 0; iCount < numTeams; iCount++) {
    let losses = 25 - TeamWins[iCount];
    allTeams +=
      TeamNames[iCount] + " " + TeamWins[iCount] + "-" + losses + "\n";
  }
  alert(allTeams);
}
