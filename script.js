'use strict';

// Select Dom Elements
const btnRoll = document.querySelector('.btn--roll');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
const scorePlayer1 = document.querySelector('#current--0');
const scorePlayer2 = document.querySelector('#current--1');

// Initial Game Conditions
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');

let currentScore1 = 0;
let currentScore2 = 0;


// Add Event Listeners
btnRoll.addEventListener('click', () => {
  // Generating Random Number
  const diceNum = Math.floor(Math.random() * 6) + 1;

  // Display Dice Image
  diceImg.classList.remove('hidden');
  diceImg.src = `/img/dice-${diceNum}.png`;

  //Check if dice roll is 1
  if (diceNum !== 1) {
    // Add dice to the current score
    if (player1.classList.contains('player--active')) {
      currentScore1 += diceNum;
      scorePlayer1.textContent = currentScore1;
    } else if (player2.classList.contains('player--active')) {
      currentScore2 += diceNum;
      scorePlayer2.textContent = currentScore2;
    }

  } else {
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (player2.classList.contains('player--active')) {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }

});

