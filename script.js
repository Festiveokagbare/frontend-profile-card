// Select the element for displaying time
const timeEl = document.querySelector('[data-testid="test-user-time"]');

// Function to update time in milliseconds
function updateTime() {
  timeEl.textContent = Date.now();
}

// Call once immediately
updateTime();

// Then update every 1 second
setInterval(updateTime, 1000);

// Theme toggle functionality
const toggleSwitch = document.getElementById("theme-switch");
const modeLabel = document.getElementById("mode-label");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
  modeLabel.textContent = "🌙 Dark";
}

// Toggle event
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    modeLabel.textContent = "🌙 Dark";
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    modeLabel.textContent = "🌞 Light";
  }
});

