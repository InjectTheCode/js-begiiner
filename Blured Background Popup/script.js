const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");

const closeEl = document.querySelector(".close-icon");
const popupContainerEl = document.querySelector(".popup-container");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active-blur");
  popupContainerEl.classList.remove("hide");
});

closeEl.addEventListener("click", () => {
  containerEl.classList.remove("active-blur");
  popupContainerEl.classList.add("hide");
});

// containerEl.addEventListener("click", () => {
//   popupContainerEl.classList.add("hide");
// });
