// Alexander Maat
// Section 001
// This program will ask the user what number they want to use for Yahtzee and how many dice they want to roll. Then it will keep rolling dice until a Yahtzee is achieved, it will display the number of rolls for each die with the die values.

//create a function called rollDie that handles generating the random number, looping until that random number is equal to the target number input by the user
//after this is achieved, a photo is grabbed that is equal to the target number, number of rolls is increments, this all only happens once

function rollDie(dieNumber, targetNumber) {
  let rolls = 0;
  while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    rolls++;
    if (roll === targetNumber) {
      document.getElementById(
        `dice${dieNumber}`
      ).src = `content/dice${targetNumber}Use.png`;
      return rolls;
    }
  }
}
// a function called rollTheDice is created,this will be attached to the ClickMe button. This function grabs the input from the user, turns it into an integer, it also grabs how many dice the user wants to use
function rollTheDice() {
  let numberInput = document.getElementById("numberInput");
  let targetNumber = parseInt(numberInput.value);
  let numberOfDie = parseInt(newDieNumber.value);

  // then it validates that the user input a number between 1 and 6
  if (targetNumber < 1 || targetNumber > 6) {
    alert("Please enter a number between 1 and 6.");
    numberInput.focus();
    return;
  }

  // initialize the diceResultsList so if user request less dice than previous request, those results are removed first
  let diceResultsList = document.getElementById("diceResults");
  diceResultsList.innerHTML = "";

  // reset images so if user request less dice than previous request, those results are removed first
  for (let dieNumber = 1; dieNumber <= 5; dieNumber++) {
    document.getElementById(`dice${dieNumber}`).src = "";
  }

  //   initalize totalRolls variable
  let totalRolls = 0;

  //loop for the amount of die requested and utalize rollDie function created earlier
  for (let dieNumber = 1; dieNumber <= numberOfDie; dieNumber++) {
    let rolls = rollDie(dieNumber, targetNumber);
    //itterate the total rolls
    totalRolls += rolls;
    //generate outputs for indiviudal dice
    let listItem = document.createElement("p");
    listItem.textContent = `Dice ${dieNumber} Rolls = ${rolls}`;
    diceResultsList.appendChild(listItem);
  }
  //generate output for total dice rolls
  document.getElementById(
    "totalRolls"
  ).textContent = `Total Rolls = ${totalRolls}`;
}
