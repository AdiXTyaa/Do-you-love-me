const noBtn = document.querySelector(".js-no-btn");
const yesBtn = document.querySelector(".js-yes-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

// Function to move the button
function moveButton() {
  // Calculate max available width and height (minus button size)
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  // Generate random coordinates
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply new position
  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// For Desktop (Mouse hover)
noBtn.addEventListener("mouseover", moveButton);

// For Mobile (Touch)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents the click from registering
  moveButton();
});

// Show result when Yes is clicked
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
});