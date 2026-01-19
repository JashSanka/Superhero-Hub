const intro = document.getElementById("intro");
const main = document.getElementById("main");
setTimeout(() => {
  intro.style.opacity = "0";
  main.style.opacity = "1";

  setTimeout(() => {
    intro.style.display = "none";
  }, 1500);

}, 10000);