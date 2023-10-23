//random number gene
homeScore += Math.floor(Math.random() * 101);
//random number gene with a range
let min = 10;
let max = 20;
homeScore += Math.floor(Math.random() * (max - min + 1)) + min;

//Itteration
for (let i = 1; i <= Nvariable; i++) {
  //code
}

//function
function nameOfFunction() {
  //code
}

//bubble sort
// two array, arHits (numbers) and arBand (strings)
// sort arHits in descending order, and sort arBand in the same way
//outer in position 0 inner in position 1
for (let iOuter = 0; iOuter < arHits.length - 1; iOuter += 1) {
  //comparing the 2, and then itterating through the array
  for (let iInner = iOuter + 1; iInner < arHits.length; iInner += 1) {
    //if the first number is less than the second number, then switch the two numbers
    if (arHits[iOuter] < arHits[iInner]) {
      holdBand = arBand[iInner];
      holdHits = arHits[iInner];

      arBand[iInner] = arBand[iOuter];
      arHits[iInner] = arHits[iOuter];

      arBand[iOuter] = holdBand;
      arHits[iOuter] = holdHits;
    }
  }
}

//write to a p tag
//ptag needs ID (id="output")
<p id="output"></p>;
document.getElementById("output").innerHTML = "Hello World!";

//grabbing an element from an array
let myArray = [10, 20, 30, 40, 50];
alert(myArray[2]); //alerts 30

// &&,  ||, === operators

//difference betwenn .puch and .pop and .shift and .unshift and splice and slice
//push adds to the end of the array
//pop removes the last element of the array
//shift removes the first element of the array
//unshift adds to the beginning of the array
//splice removes an element from the array
//slice copies an element from the array

// change string to upper and lower case
let userInputUpperCase = userInput.toUpperCase();
console.log(userInputUpperCase); // "HELLO WORLD"

let userInputLowerCase = userInput.toLowerCase();
console.log(userInputLowerCase); // "hello world"

//grabbing letts in string
const myString = "Hello";

let firstCharacter = myString[0];
console.log(firstCharacter); // "H"

//difference between = == ===
// = is an assignment operator
// == is a comparison operator
// === is a strict comparison operator
