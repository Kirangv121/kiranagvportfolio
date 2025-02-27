function showPopup(message, isSuccess = false) {
  // Create a popup element dynamically
  const popup = document.createElement("div");
  popup.classList.add(
    "popup",
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "bg-gray-800",
    "bg-opacity-50",
    "flex",
    "items-center",
    "justify-center",
    "z-50"
  );

  const popupContent = document.createElement("div");
  popupContent.classList.add(
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-80",
    "text-center"
  );

  const popupMessage = document.createElement("p");
  popupMessage.textContent = message;
  popupMessage.classList.add("text-lg", "font-semibold", "text-gray-800");

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add(
    "mt-4",
    "bg-yellow-400",
    "text-white",
    "py-2",
    "px-4",
    "rounded",
    "hover:bg-yellow-500"
  );

  // Close the popup on button click
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup); // Remove popup from DOM
  });

  popupContent.appendChild(popupMessage);
  popupContent.appendChild(closeButton);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  // If it's a success popup, auto-close after 3 seconds
  if (isSuccess) {
    setTimeout(() => {
      document.body.removeChild(popup); // Remove popup after a timeout
    }, 3000);
  }
}

// Google Sheet script URL
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxuw_G-9YMjlwbfu_QX7RLtG5KSG8MeV0SEggMS9-mRP53WrDpgxXk49CyuPj8Dd3G0/exec"; // Replace with your Web App URL

const form = document.getElementById("submit-to-google-sheet");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable form to prevent multiple submissions
  form.querySelector('button[type="submit"]').disabled = true;

  // Show loading message or spinner (optional)
  showPopup("Submitting your form... Please wait.");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Remove "Please wait..." popup and show success message
      const existingPopup = document.querySelector(".popup");
      if (existingPopup) {
        existingPopup.remove(); // Remove the "Please wait..." popup
      }
      showPopup("Form submitted successfully!", true); // Success message
      form.reset(); // Reset the form after successful submission

      // Re-enable the submit button after a successful submission
      form.querySelector('button[type="submit"]').disabled = false;
    })
    .catch((error) => {
      // Remove "Please wait..." popup and show error message
      const existingPopup = document.querySelector(".popup");
      if (existingPopup) {
        existingPopup.remove(); // Remove the "Please wait..." popup
      }
      showPopup("Error submitting the form. Please try again.");

      // Re-enable the submit button after an error
      form.querySelector('button[type="submit"]').disabled = false;
    });
});

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "YouTuber",
  "Content Creator",
];
let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById("typedText");
const cursorElement = document.getElementById("cursor");

function typeEffect() {
  const currentRole = roles[currentRoleIndex];

  // Toggle cursor visibility for blinking effect
  cursorElement.style.opacity = cursorElement.style.opacity === "1" ? "0" : "1";

  if (isDeleting) {
    typedTextElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typedTextElement.textContent = currentRole.substring(0, charIndex++);
  }

  // Manage typing and deleting
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to next role
  }

  setTimeout(typeEffect, isDeleting ? 100 : 200); // Typing speed
}

typeEffect();
