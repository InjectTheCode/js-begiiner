const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}
const colorEls = document.querySelectorAll(".color-container");

generateColor();

function randomColorGenrator() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

function generateColor() {
  colorEls.forEach((el) => {
    const randomColor = randomColorGenrator();

    el.style.backgroundColor = `#${randomColor}`;

    el.innerText = `#${randomColor}`;

    console.log(randomColor);
  });
}
