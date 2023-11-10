// JavaScript for handling form submission (you will need server-side code for email sending)
const form = document.getElementById("addressForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // You should add your code here to send the form data to the server
  // and handle email sending on the server-side.

  // For example, you can use the Fetch API to send the data to a server endpoint.
  // Replace 'your-server-endpoint' with the actual URL where your server handles form submissions.
  fetch("your-server-endpoint", {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Form submission failed.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Form submission failed.");
    });
});
