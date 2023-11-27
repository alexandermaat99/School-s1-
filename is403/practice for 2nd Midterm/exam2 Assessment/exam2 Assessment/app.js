document.addEventListener("DOMContentLoaded", () => {
  // Clear local storage on page load
  localStorage.clear();
  // Set focus on the first name input field
  document.getElementById("firstName").focus();

  // Add event listener to the Save button
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", saveUserInfo);
});

function saveUserInfo() {
  // Retrieve input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  // Check if required fields are empty
  if (!firstName || !lastName) {
    // Alert user to enter First Name and Last Name
    alert("Please enter First Name and Last Name.");
    // Set focus on the first empty input field
    if (!firstName) {
      document.getElementById("firstName").focus();
    } else {
      document.getElementById("lastName").focus();
    }
    return;
  }

  // Get values from other inputs
  const password = document.getElementById("password").value.trim();
  const dob = document.getElementById("dob").value;
  const gpa = parseFloat(document.getElementById("gpa").value);
  const gender = document.getElementById("gender").value;
  const receiveEmails = document.getElementById("receiveEmails").checked;

  // Store values in local storage
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("password", password);
  localStorage.setItem("dob", dob);
  localStorage.setItem("gpa", gpa);
  localStorage.setItem("gender", gender);
  localStorage.setItem("receiveEmails", receiveEmails ? "Yes" : "No");

  // Open a new tab to display stored information
  window.open("userInfoDisplay.html", "_blank");
  // Clear local storage after displaying information
  localStorage.clear();
}
