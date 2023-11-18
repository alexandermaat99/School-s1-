//keeps the contents of the array and returns contents in console
for (let iCount = 0; iCount < asNames.length; iCount++) {
  console.log(asNames[iCount]);
}

//destroys the contents of the array and returns contents in console
while (asNames.lenght > 0) {
  console.log(asNames[0]);
  asNames.shift();
}

let sOutput = "skjdhfkjsdhfs";

//ptag needs ID (id="output") <p id = "output"></p>
document.getElementById("output").innerHTML = sOutput;
