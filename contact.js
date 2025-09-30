
  // Auto-fill subject from URL (from product page)
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectFromURL = urlParams.get('subject');
    if (subjectFromURL) {
      document.getElementById('subject').value = decodeURIComponent(subjectFromURL);
    }
  };

  // Form Validation & Submission
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

    // Simple email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMsg.style.color = "red";
      formMsg.textContent = "⚠️ Please enter a valid email address.";
      return;
    }

    formMsg.style.color = "green";
    formMsg.textContent = "✅ Thank you! Your message has been sent.";

    // Reset form except Subject
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });

// ???????????????????? MAP ???????????????????????
// Example: Scroll to map when a button is clicked
document.getElementById("viewMapBtn")?.addEventListener("click", () => {
  document.querySelector(".map-section").scrollIntoView({ behavior: "smooth" });
});
