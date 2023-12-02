let arBand = [
  "Beatles",
  "Michael Jackson",
  "Mariah Carey",
  "Stevie Wonder",
  "Eagles",
  "Rihanna",
];

let arHits = [20, 13, 18, 9, 5, 15];

let holdBand;
let holdHits;
let output = "";

for (let iOuter = 0; iOuter < arHits.length - 1; iOuter += 1) {
  for (let iInner = iOuter + 1; iInner < arHits.length; iInner += 1) {
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

output = "The band with the most #1 hits: ";
for (let iCount = 0; iCount < arHits.length; iCount += 1) {
  output =
    output + "\n" + arBand[iCount] + " had " + arHits[iCount] + " #1 hits.";
}

console.log(output);
