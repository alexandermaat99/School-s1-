document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        console.log(checkbox.id + " is checked.");
        // Add your custom logic here
      } else {
        console.log(checkbox.id + " is unchecked.");
        // Add your custom logic here
      }
    });
  });
});
