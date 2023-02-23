function runActivity() {
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
    if (name === "" || email === "" || message === "") {
      // show an error message to the user
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // show an error message to the user
    }

    if (message.length > 1000) {
      // show an error message to the user
    }

    let lastSubmitTime = 0;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const now = Date.now();

      if (now - lastSubmitTime < 5000) {
        // show an error message to the user
      }

      lastSubmitTime = now;

      // continue with form submission
    });

    // send form data to server using AJAX request or other method
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // code to handle server's response
      };

      xhr.onerror = function () {
        // code to handle error
      };

      xhr.open("POST", "/submit-form.php");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(formData);
    });

    // update form elements with feedback for user
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    // add code to display success or error message to user
  });
}
