const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

remainingEl.innerText = textareaEl.getAttribute("maxlength");

textareaEl.addEventListener("keyup", () => {
  let textareaValue = textareaEl.value.length;
  let remainingValue = +textareaEl.getAttribute("maxlength");

  totalCharacterEl.innerText = textareaValue;

  remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaValue;

  if (remainingValue == 0) return;
});
