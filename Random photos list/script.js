const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  updateImage();
});

function updateImage() {
  for (let i = 0; i < 10; i++) {
    const imgEl = document.createElement("img");
    const randomNum = Math.floor(Math.random() * 2000);

    imgEl.src = `https://picsum.photos/200/300?random=${randomNum}`;

    imageContainerEl.appendChild(imgEl);
  }
}
