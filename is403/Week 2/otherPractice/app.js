

var sFirstName = prompt("Enter your first name:");

var sLastName = prompt("Enter your last name:");

var sAddress = prompt("Enter your street address:");

var sCity = prompt("Enter your city:");

var sState = prompt("Enter your state:");

var bYear = parseInt( prompt("Enter your birth year:"));

var cYear = parseInt(prompt("Enter the current year:"));

age = cYear - bYear;

alert(
    sFirstName + ' ' + sLastName + '\n' +
    sAddress + ' ' + sCity + '\t' + sState + '\n' +
    'In ' + cYear + ', ' + sFirstName + ' was ' + age + ' years old.'
  );