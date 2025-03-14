'use strict';

let wildGuess = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const myGuess = document.querySelector('.guess').value;

  if (myGuess == wildGuess) {
    document.body.style.backgroundColor = 'green';

    document.querySelector('.message').textContent = 'Congratulations...';
    document.querySelector('.number').textContent = wildGuess;
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.highscore').textContent = score;
  } else if (myGuess > wildGuess && myGuess < 21) {
    score = score - 1;
    document.querySelector('.message').textContent = 'To High...';
    document.querySelector('.score').innerHTML = score;
  } else if (myGuess < wildGuess && myGuess > 0) {
    score--;
    document.querySelector('.message').textContent = 'To Low...';
    document.querySelector('.score').innerHTML = score;
  } else {
    document.querySelector('.message').textContent = 'Input between 1 and 20';
  }
});
console.log(wildGuess);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  wildGuess = Math.floor(Math.random() * 20) + 1;
  console.log(wildGuess);
  document.body.style.backgroundColor = '#222';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
});
