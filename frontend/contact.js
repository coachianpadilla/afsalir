const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // code to handle form submission

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // perform validation on form data here

  // send form data to server using AJAX request or other method

  // update form elements with feedback for user
  //   nameInput.value = "";
  //   emailInput.value = "";
  //   messageInput.value = "";
  // add code to display success or error message to user
});
