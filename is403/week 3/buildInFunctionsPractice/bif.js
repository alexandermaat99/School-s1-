let input = prompt("Enter a phrase: ");
let search = prompt("Which part would you like to replace?: ");
let replace = prompt("What would you like to replace it with?: ");

newPhrase = input.replace(search, replace).trim();

alert(newPhrase);
