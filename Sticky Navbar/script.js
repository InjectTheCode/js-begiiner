const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  const bottonElOffset = bottomEl.offsetTop;
  const navbarElHeight = navbarEl.offsetHeight;

  if (window.scrollY > bottonElOffset - navbarElHeight - 50) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

// "bottonElOffset" is the size of top of this element until the top of browser view.
//  "navbarElHeight" is the size of height.
// the 50 in if() condition is marginTop of element, cause we want to watch changes at first of element.
