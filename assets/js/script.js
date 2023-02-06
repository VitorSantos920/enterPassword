const song = document.querySelector(".song");
const darkBtn = document.querySelector(".dark-btn");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
const closedeye = document.querySelector(".closedeye");

document.getElementById("cb-ss").addEventListener("change", () => {
  song.play();
  song.currentTime = 0;
});

darkBtn.addEventListener("click", () => {
  container.classList.toggle("dark-container");
  box.classList.toggle("dark-box");

  if (container.classList.contains("dark-container")) {
    closedeye.src = "assets/img/closedeye-dark.svg";
    darkBtn.src = "assets/img/sun.png";
  } else {
    closedeye.src = "assets/img/closedeye.svg";
    darkBtn.src = "assets/img/moon.png";
  }
});
