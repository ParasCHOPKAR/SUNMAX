// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMsg = document.getElementById("formMsg");

  if (!name || !email || !subject || !message) {
    formMsg.style.color = "red";
    formMsg.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  // Simple email regex check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMsg.style.color = "red";
    formMsg.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  formMsg.style.color = "green";
  formMsg.textContent = "✅ Thank you! Your message has been sent.";
  
  // Reset form
  document.getElementById("contactForm").reset();
});


// ???????????????????? MAP ???????????????????????
// Example: Scroll to map when a button is clicked
document.getElementById("viewMapBtn")?.addEventListener("click", () => {
  document.querySelector(".map-section").scrollIntoView({ behavior: "smooth" });
});
