// <!-- Alexander Maat
// Section 001  -->

// <!-- This program gathers information form the user and generates a score based on
// matching letters and applying a variable based on which boxes are checked  -->

function calculateMatch() {
  // Retrieve input values
  let lovePhrase = document
    .getElementById("lovePhrase")
    .value.toLowerCase()
    .replace(/\s/g, "");
  let firstName = document
    .getElementById("firstName")
    .value.toLowerCase()
    .replace(/\s/g, "");
  let secondName = document
    .getElementById("secondName")
    .value.toLowerCase()
    .replace(/\s/g, "");
  let heart = document.getElementById("heart");
  let matchMessage = document.getElementById("matchMessage");

  // Logic to compare characters and count matches
  let iLoveCount = 0;
  for (let i = 0; i < firstName.length; i++) {
    if (lovePhrase.includes(firstName[i])) {
      iLoveCount++;
    }
  }
  for (let i = 0; i < secondName.length; i++) {
    if (lovePhrase.includes(secondName[i])) {
      iLoveCount++;
    }
  }

  // Logic for checkboxes
  let iFactor = 1;
  if (document.getElementById("checkbox1").checked) {
    iFactor += 0.25;
  }
  if (document.getElementById("checkbox2").checked) {
    iFactor += 0.25;
  }
  if (document.getElementById("checkbox3").checked) {
    iFactor += 0.25;
  }
  if (document.getElementById("checkbox4").checked) {
    iFactor += 0.25;
  }
  if (document.getElementById("checkbox5").checked) {
    iFactor += 0.5;
  }

  // Calculate iPower
  let sLovePhrase = lovePhrase.length;
  let iPower = Math.ceil((iLoveCount / sLovePhrase) * 22 * iFactor);

  heart.setAttribute("data-value", iPower); // Update the data-value attribute here

  // Set the heart value and message

  let message = "";
  if (iPower >= 100) {
    message = "Perfect Marriage";
  } else if (iPower >= 85) {
    message = "Get Married!";
  } else if (iPower >= 70) {
    message = "It might work";
  } else {
    message = "Keep looking!";
  }
  matchMessage.innerHTML = message;
}

function resetFields() {
  document.getElementById("lovePhrase").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("secondName").value = "";
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
  document.getElementById("checkbox4").checked = false;
  document.getElementById("checkbox5").checked = false;
  let heart = document.getElementById("heart");
  heart.setAttribute("data-value", "0");
  let matchMessage = document.getElementById("matchMessage");
  matchMessage.innerHTML = "";
  document.getElementById("lovePhrase").focus();
}
