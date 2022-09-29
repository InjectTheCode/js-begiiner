const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const btnEl = document.querySelector(".btn");
const formEl = document.getElementById("form");

const randomNum1 = Math.floor(Math.random() * 10);
const randomNum2 = Math.floor(Math.random() * 11);

questionEl.innerText = `What is ${randomNum1} multiply by ${randomNum2}?`;

const correctAnswer = randomNum1 * randomNum2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) score = 0;

formEl.addEventListener("submit", () => {
  const inputValue = +inputEl.value;

  if (inputValue == correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
scoreEl.innerText = `score: ${score}`;

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
