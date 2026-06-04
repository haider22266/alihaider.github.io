const confettiButton = document.querySelector("#confettiButton");

if (confettiButton) {
  confettiButton.addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    for (let index = 0; index < 34; index += 1) {
      createSpark(originX, originY);
    }
  });
}

function createSpark(originX, originY) {
  const spark = document.createElement("span");
  const angle = Math.random() * Math.PI * 2;
  const distance = 60 + Math.random() * 130;
  const colors = ["#16a6a3", "#f05f57", "#f7c948", "#2d6cdf", "#ffffff"];

  spark.className = "spark";
  spark.style.left = `${originX}px`;
  spark.style.top = `${originY}px`;
  spark.style.background = colors[Math.floor(Math.random() * colors.length)];
  spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
  spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

  document.body.appendChild(spark);
  spark.addEventListener("animationend", () => spark.remove());
}
