'use strict';

// Select Dom Elements
const btnRoll = document.querySelector('.btn--roll');
let diceImg = document.querySelector('.dice');

// Create Random Dice Roll Numbers
let randNum = Math.floor(Math.random() * 6) + 1;

const diceRoll = () => {
  switch (randNum) {
    case 1:
      diceImg.src = 'img/dice-1.png';
      break;
    case 2:
      diceImg.src = 'img/dice-2.png';
      break;
    case 3:
      diceImg.src = 'img/dice-3.png';
      break;
    case 4:
      diceImg.src = 'img/dice-4.png';
      break;
    case 5:
      diceImg.src = 'img/dice-5.png';
      break;
    case 6:
      diceImg.src = 'img/dice-6.png';
  }
  return randNum
}

// Add Event Listeners
btnRoll.addEventListener('click', () => {
  console.log(diceRoll());
});

