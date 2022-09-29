const btnEl = document.querySelector(".btn");
const popupEl = document.querySelector(".trailer-container");
const closeEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  popupEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
  popupEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});

popupEl.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popupEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
  }
});
