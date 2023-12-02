// Define arrays to store athlete information
let athleteNames = [];
let monetaryValues = [];
let monetaryMessages = [];

// Function to calculate monetary value and store data
function goForTheGold() {
  let numAthletes = parseInt(prompt("How many athletes?"));

  if (numAthletes === 0) {
    return; // Don't display results for 0 athletes.
  }

  for (let i = 0; i < numAthletes; i++) {
    // Gather athlete name
    let athleteName = prompt("Enter Athlete " + (i + 1) + "'s name:");
    athleteNames.push(athleteName);

    // Gather medal information
    let goldMedals = parseInt(
      prompt("Enter " + athleteName + "'s number of Gold Medals:")
    );
    let silverMedals = parseInt(
      prompt("Enter " + athleteName + "'s number of Silver Medals:")
    );
    let bronzeMedals = parseInt(
      prompt("Enter " + athleteName + "'s number of Bronze Medals:")
    );

    // Calculate monetary value
    let monetaryValue =
      goldMedals * 37500 + silverMedals * 22500 + bronzeMedals * 15000;
    monetaryValues.push(monetaryValue);

    // Determine and store the result message
    if (monetaryValue >= 500000) {
      monetaryMessages.push("Become a sports commentator");
    } else if (monetaryValue >= 250000) {
      monetaryMessages.push("You are rich and famous");
    } else {
      monetaryMessages.push("Great job! Keep training!");
    }
  }

  // Sort the monetaryValues array and keep other arrays in sync
  for (let i = 0; i < numAthletes - 1; i++) {
    for (let j = 0; j < numAthletes - i - 1; j++) {
      if (monetaryValues[j] < monetaryValues[j + 1]) {
        // Swap monetaryValues
        let tempValue = monetaryValues[j];
        monetaryValues[j] = monetaryValues[j + 1];
        monetaryValues[j + 1] = tempValue;

        // Swap athleteNames
        let tempName = athleteNames[j];
        athleteNames[j] = athleteNames[j + 1];
        athleteNames[j + 1] = tempName;

        // Swap monetaryMessages
        let tempMessage = monetaryMessages[j];
        monetaryMessages[j] = monetaryMessages[j + 1];
        monetaryMessages[j + 1] = tempMessage;
      }
    }
  }

  // Display the results in the HTML file
  let output = document.getElementById("olympicOutput");
  output.innerHTML = ""; // Clear previous content

  for (let i = 0; i < numAthletes; i++) {
    output.innerHTML +=
      athleteNames[i] +
      " " +
      monetaryValues[i] +
      " " +
      monetaryMessages[i] +
      "<br>";
  }
}
