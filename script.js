'use strict';

// Select Dom Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');

let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
let activePlayer = document.querySelector('.player--active');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

// Initial Game Conditions
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
diceImg.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayerScore = 0;


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
    currentScore += diceNum;
    document.querySelector(`#current--${activePlayerScore}`).textContent = currentScore;

  } else {
    document.querySelector(`#current--${activePlayerScore}`).textContent = 0;
    currentScore = 0;
    activePlayerScore = activePlayerScore === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});

