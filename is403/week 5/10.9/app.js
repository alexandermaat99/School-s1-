//alexander maat
//section 001

let aNames = [];
let sMenu =
  "1 - Add to end\n2 - Remove from end \n3 - Add to beginning\n4 - Remove from beginning\n5 - Exit";

iInput = parseInt(prompt(sMenu));

while (iInput != 5) {
  sName = prompt("Enter a name");
  if (iInput == 1) {
    aNames.push(sName);
  } else if (iInput == 2) {
    aNames.pop();
  } else if (iInput == 3) {
    aNames.unshift(sName);
  } else if (iInput == 4) {
    aNames.shift();
  } else {
    alert("Invalid input");
  }
}
