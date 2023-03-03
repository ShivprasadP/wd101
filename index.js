// Retrieve the table body element
const registrationData = document.getElementById("registration-table-body");

// Define a function to populate the table body with data from localStorage
function populateTable() {
  // Retrieve the array of objects from localStorage
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  // Loop through the array and create a table row for each object
  registrations.forEach(registration => {
    const newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const passwordCell = document.createElement("td");
    const dobCell = document.createElement("td");
    nameCell.textContent = registration.name;
    emailCell.textContent = registration.email;
    passwordCell.textContent = registration.password;
    dobCell.textContent = registration.dob;
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(passwordCell);
    newRow.appendChild(dobCell);
    registrationData.appendChild(newRow);
  });
}

// Call the populateTable function when the page is loaded
window.addEventListener("load", populateTable);

// Add an event listener to the form submission
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", event => {
  event.preventDefault(); // prevent default form submission

  // Retrieve form data and add it to an array of objects
  const formData = new FormData(registrationForm);
  const registration = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    dob: formData.get("dob")
  };
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push(registration);
  localStorage.setItem("registrations", JSON.stringify(registrations));

  // Call the populateTable function to update the table with the new data
  populateTable();

  // Reset the form
  registrationForm.reset();
});
