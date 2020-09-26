// Caching a client's theme preferences using local storage
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

// Query for the elements whose class="theme-dot"
// We are selecting for the customizabe themes
let themeDots = document.getElementsByClassName("theme-dot");

// Loop through the array of elements with class="theme-dot"
for (let i = 0; themeDots.length > i; i++) {
  // Add functionality/event listener to each theme dot
  // When a theme-dot is clicked
  themeDots[i].addEventListener("click", function () {
    // Determine which theme is clicked
    let mode = this.dataset.mode;

    // Pass the theme as an argument to then setTheme
    setTheme(mode);
  });
}

// This function will set different href's to the <link> elemnt in index.html
// Depending on which theme was clicked, different css pages will apply
function setTheme(mode) {
  switch (mode) {
    case "light":
      document.getElementById("theme-style").href = "styles/default.css";
      break;

    case "blue":
      document.getElementById("theme-style").href = "styles/blue.css";
      break;

    case "green":
      document.getElementById("theme-style").href = "styles/green.css";
      break;

    case "purple":
      document.getElementById("theme-style").href = "styles/purple.css";
      break;
  }
  // Save the mode chosen into the "theme key" of localStorage
  // This caches the user's options for later
  localStorage.setItem("theme", mode);
}
