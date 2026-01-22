const intro = document.getElementById("intro");
const main = document.getElementById("main");
const header = document.querySelector("header");

setTimeout(() => {
  // Fade out intro
  if (intro) {
    intro.classList.add("hide");
    setTimeout(() => {
      intro.style.display = "none";
    }, 1500);
  }

  // Fade in main content
  if (main) {
    main.style.opacity = "1";
  }

  // Slide down header
  if (header) {
    header.classList.add("show");
  }

}, 14000);
