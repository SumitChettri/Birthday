function randomColor() {
  const colors = ["#ff4d4d", "#4da6ff", "#85e085", "#ffa64d", "#d98aff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor = randomColor();
  balloon.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.getElementById("balloon-container").appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 300);
