let display1 = document.querySelector("#display-1");
let display2 = document.querySelector("#display-2");
let player1 = document.querySelector("#player-1");
let player2 = document.querySelector("#player-2");
let clearDisplay = document.querySelector("#clearDisplay");
let option = document.querySelector("#select");

let score = 0;
let isWin = false;
let winPoint = 6;

function remove() {
  score = 0;
  isWin = false;
  display1.textContent = 0;
  display2.textContent = 0;
}

player1.addEventListener("click", () => {
  if (!isWin) {
    display1.textContent = ++score;
    if (score === winPoint) {
      isWin = true;
    }
  }
});

player2.addEventListener("click", () => {
  if (!isWin) {
    display2.textContent = ++score;
    if (score === winPoint) {
      isWin = true;
    }
  }
});

clearDisplay.addEventListener("click", remove);

option.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  remove();
});
