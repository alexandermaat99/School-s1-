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

function rollTheDice() {
  let numberInput = document.getElementById("numberInput");
  let targetNumber = parseInt(numberInput.value);
  let numberOfDie = parseInt(newDieNumber.value);

  if (targetNumber < 1 || targetNumber > 6) {
    alert("Please enter a number between 1 and 6.");
    numberInput.focus();
    return;
  }

  // Clear the previous results
  let diceResultsList = document.getElementById("diceResults");
  diceResultsList.innerHTML = "";

  // Clear the previous dice images
  for (let dieNumber = 1; dieNumber <= 5; dieNumber++) {
    document.getElementById(`dice${dieNumber}`).src = "";
  }

  let totalRolls = 0;

  for (let dieNumber = 1; dieNumber <= numberOfDie; dieNumber++) {
    let rolls = rollDie(dieNumber, targetNumber);
    totalRolls += rolls;

    let listItem = document.createElement("p");
    listItem.textContent = `Dice ${dieNumber} Rolls = ${rolls}`;
    diceResultsList.appendChild(listItem);
  }

  document.getElementById(
    "totalRolls"
  ).textContent = `Total Rolls = ${totalRolls}`;
}
