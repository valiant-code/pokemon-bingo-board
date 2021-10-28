const bodyEl = document.querySelector("body");
let darkModeIsOn = false;

function toggleDarkMode() {
  if (darkModeIsOn) {
    bodyEl.classList.remove("dark-mode");
    darkModeIsOn = false
  } else {
    bodyEl.classList.add("dark-mode");
    darkModeIsOn = true
  }

  console.log(darkModeIsOn)
}
