const bgImageEl = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  const windowYOffset = window.pageYOffset;

  bgImageEl.style.opacity = 1 - windowYOffset / 850;
}
