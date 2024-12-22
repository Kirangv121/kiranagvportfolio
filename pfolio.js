// Dropdown functionality
const navProfilePhoto = document.getElementById("navProfilePhoto");
const dropdown = document.getElementById("dropdown");

navProfilePhoto.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("dropdown-enter");
  dropdown.classList.toggle("dropdown-show");
});

// Profile photo hover effect (center)
const profilePhoto = document.getElementById("profilePhoto");
profilePhoto.addEventListener("mouseenter", () => {
  profilePhoto.style.transition = "transform 0.3s ease";
  profilePhoto.style.transform = "scale(1.1)";
});
profilePhoto.addEventListener("mouseleave", () => {
  profilePhoto.style.transform = "scale(1)";
});
