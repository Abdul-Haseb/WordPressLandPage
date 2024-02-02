const showMenu = document.getElementById("hamburger");
const showNavMenu = document.getElementById("ShowNavMenu");
const closeButton = document.getElementById("closeButton");

showMenu.addEventListener("click", () => {
  showNavMenu.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  showNavMenu.classList.add("hidden");
  closeButton.classList.add("hidden");
});
