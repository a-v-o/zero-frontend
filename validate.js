const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    if (!name.value.trim()) {
      valid = false;
      document.getElementById("error-name").textContent = "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
    }

    if (!subject.value.trim()) {
      valid = false;
      document.getElementById("error-subject").textContent =
        "Subject is required.";
    }

    if (message.value.trim().length < 10) {
      valid = false;
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
    }

    if (valid) {
      success.hidden = false;
      form.reset();
    } else {
      success.hidden = true;
    }
  });
}
