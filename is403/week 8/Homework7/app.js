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

  if (targetNumber < 1 || targetNumber > 6) {
    alert("Please enter a number between 1 and 6.");
    numberInput.focus();
    return;
  }

  let totalRolls = 0;
  let diceResults = [];

  for (let dieNumber = 1; dieNumber <= 5; dieNumber++) {
    let rolls = rollDie(dieNumber, targetNumber);
    totalRolls += rolls;
    diceResults.push(`Dice ${dieNumber} Rolls = ${rolls}`);
  }

  document.getElementById("diceResults").textContent = diceResults.join(", ");
  document.getElementById(
    "totalRolls"
  ).textContent = `Total Rolls = ${totalRolls}`;
}
