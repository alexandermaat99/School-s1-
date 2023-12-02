// Alexander Maat
// Section 01

let numGames = parseInt(prompt("How many games are in the soccer season?"));
let wins;
let lesses;

for (let i = 0; i < numGames; i++) {
  let result = prompt("Did we win, lose, or tie?");
  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    lesses++;
  }
}

//write a function that recieves 2 parameters and returns random number, inclusive

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = parseInt(prompt("Enter a minimum number"));
let max = parseInt(prompt("Enter a maximum number"));
console.log(getRandomInt(min, max));

//write a function that recieves 2 parameters and returns random number, exclusive
