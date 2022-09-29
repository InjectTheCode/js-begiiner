const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container");
const imagesEl = document.querySelectorAll(".imgs");

let currentSlide = 0;
let imagesLength = imagesEl.length - 1;

const goToSlide = function (slide) {
  imagesEl.forEach((el) => {
    el.style.transform = `translateX(-${100 * slide}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  // I rather use this syntax.
  currentSlide >= imagesLength ? (currentSlide = 0) : currentSlide++;

  // we can use this syntax too.
  //   if (currentSlide === imagesLength) {
  //     currentSlide = 0;
  //   } else {
  //     currentSlide++;
  //   }

  goToSlide(currentSlide);

  console.log(currentSlide);
};

const prevSlide = function () {
  // I rather use this syntax.
  currentSlide < 1 ? (currentSlide = imagesLength) : currentSlide--;

  // we can use this syntax too.
  //   if (currentSlide === 0) {
  //     currentSlide = imagesLength;
  //   } else {
  //     currentSlide--;
  //   }

  goToSlide(currentSlide);

  console.log(currentSlide);
};

nextBtnEl.addEventListener("click", nextSlide);
prevBtnEl.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowRight" && nextSlide();
  e.key === "ArrowLeft" && prevSlide();
});

// if you want to write with one function, can use function below!
// function updateImg() {
//   if (currentSlide > imagesLength) {
//     currentSlide = 1;
//   } else if (currentSlide < 1) {
//     currentSlide = imagesLength;
//   }
//   imageContainerEl.style.transform = `translateX(-${
//     (currentSlide - 1) * 100
//   }%)`;
// }

// nextBtnEl.addEventListener("click", () => {
//   currentSlide++;
//   updateImg();
// });
