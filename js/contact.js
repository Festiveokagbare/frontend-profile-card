const form = document.getElementById("contact-form");
const successMsg = document.querySelector("[data-testid='test-contact-success']");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Full Name
  const name = document.getElementById("name");
  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Full Name is required";
    valid = false;
  }

  // Email
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.trim()) {
    document.getElementById("error-email").textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    document.getElementById("error-email").textContent = "Email is invalid";
    valid = false;
  }

  // Subject
  const subject = document.getElementById("subject");
  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = "Subject is required";
    valid = false;
  }

  // Message
  const message = document.getElementById("message");
  if (!message.value.trim()) {
    document.getElementById("error-message").textContent = "Message is required";
    valid = false;
  } else if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters";
    valid = false;
  }

  // Show success
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
