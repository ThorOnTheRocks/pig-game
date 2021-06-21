'use strict';

// Select Dom Elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');

let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
let activePlayer = document.querySelector('.player--active');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');


let scores, currentScore, activePlayerScore, playing;


const init = () => {
  // Initial Game Conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayerScore = 0;
  playing = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  diceImg.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
}
init();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayerScore}`).textContent = 0;
  currentScore = 0;
  activePlayerScore = activePlayerScore === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};


// Add Event Listeners
btnRoll.addEventListener('click', () => {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {


    scores[activePlayerScore] += currentScore;
    document.querySelector(`#score--${activePlayerScore}`).textContent = scores[activePlayerScore];

    if (scores[activePlayerScore] >= 100) {
      playing = false;
      diceImg.classList.add('hidden');
      document.querySelector(`.player--${activePlayerScore}`).classList.add('player--winner');
      document.querySelector(`.playerr--${activePlayerScore}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }

})

btnNew.addEventListener('click', init);

