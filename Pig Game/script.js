"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const playerActive = document.querySelector(".player--active");
const displayCurrentScore0 = document.querySelector("#current--0");
const displayCurrentScore1 = document.querySelector("#current--1");
const displayScore0 = document.querySelector("#score--0");
const displayScore1 = document.querySelector("#score--1");

const diceImg = function (a) {
  document.querySelector(".dice").src = `dice-${a}.png`;
};

let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let diceResult = 0;

const displayCurrentScore = function () {
  displayCurrentScore0.textContent = currentScore0;
  displayCurrentScore1.textContent = currentScore1;
};

const displayScore = function () {
  displayScore0.textContent = score0;
  displayScore1.textContent = score1;
};

const playerChange = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  displayCurrentScore();
  if (player0.classList.contains("player--active")) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  } else {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
};

btnRollDice.addEventListener("click", function () {
  diceResult = Math.trunc(Math.random() * 6 + 1);
  console.log(diceResult);
  if (diceResult === 1) {
    playerChange();
    diceImg(diceResult);
  } else {
    player0.classList.contains("player--active")
      ? (currentScore0 = currentScore0 + diceResult)
      : (currentScore1 = currentScore1 + diceResult);
    displayCurrentScore();
    diceImg(diceResult);
  }
});

btnHold.addEventListener("click", function () {
  score0 = score0 + currentScore0;
  score1 = score1 + currentScore1;
  displayScore();
  playerChange();
});

btnNew.addEventListener("click", function () {
  score0 = 0;
  score1 = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  diceResult = 0;
  displayScore();
  displayCurrentScore();
  if (player1.classList.contains("player--active")) playerChange();
});
