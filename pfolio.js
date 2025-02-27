// ===================== 1. Smooth Scroll Enhancement =====================
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjusted to provide better spacing
        behavior: "smooth",
      });
    }
  });
});

// ===================== 2. Modal Popup =====================
const modal = document.getElementById("modal");
const modalOpenBtn = document.getElementById("openModalBtn");
const modalCloseBtn = document.getElementById("closeModalBtn");

modalOpenBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex"); // Show modal
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden"); // Hide modal
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
});

// ===================== 3. Form Validation =====================
const form = document.getElementById("submit-to-google-sheet");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Clear any previous error messages
  const errorMessages = form.querySelectorAll(".error");
  errorMessages.forEach((msg) => msg.remove());

  // Name validation
  if (nameInput.value.trim() === "") {
    isValid = false;
    const error = document.createElement("div");
    error.classList.add("error", "text-red-500");
    error.textContent = "Name is required.";
    nameInput.parentElement.appendChild(error);
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    isValid = false;
    const error = document.createElement("div");
    error.classList.add("error", "text-red-500");
    error.textContent = "Please enter a valid email address.";
    emailInput.parentElement.appendChild(error);
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    isValid = false;
    const error = document.createElement("div");
    error.classList.add("error", "text-red-500");
    error.textContent = "Message cannot be empty.";
    messageInput.parentElement.appendChild(error);
  }

  if (isValid) {
    // Submit the form to Google Sheets if valid
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxuw_G-9YMjlwbfu_QX7RLtG5KSG8MeV0SEggMS9-mRP53WrDpgxXk49CyuPj8Dd3G0/exec"; // Replace with your Web App URL
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Form submitted successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Error submitting the form. Please try again.");
      });
  }
});

// ===================== 4. Theme Switcher =====================
const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// ===================== 5. Scroll Animations with IntersectionObserver =====================
const animatedElements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp");
      }
    });
  },
  { threshold: 0.5 }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});
