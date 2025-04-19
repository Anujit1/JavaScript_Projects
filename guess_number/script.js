let randomNum = Math.floor(Math.random() * 10) + 1;
let previousGuess = [];
let guessCount = 10;
let playGame = true;

const input = document.getElementById('guess-input');
const submit = document.getElementById('btn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const data = document.getElementById('data');

result.innerHTML = `${guessCount} guess${guessCount !== 1 ? 'es' : ''} remaining.`;
data.innerHTML = previousGuess.join(', ');


submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (!playGame) {
    newGame();
    return;
  }

  const guess = parseInt(input.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    input.value = '';
    alert('Please enter a valid number between 1 and 10.');
    return;
  }

  validateGuess(guess);
});

function validateGuess(guess) {
  if (guess === randomNum) {
    displayMessage("🎉 You Won! 🎉");
    endGame();
  } 
  else {
    guessCount--;
    previousGuess.push(guess);
    data.innerHTML = previousGuess.join(', ');
    input.value = '';
    result.innerHTML = `${guessCount} guesses remaining.`;

    if (guessCount === 0) {
      displayMessage(`Game over. The number was ${randomNum}`);
      endGame();
    } 
    else {
      result.innerHTML = `${guessCount} guess${guessCount !== 1 ? 'es' : ''} remaining.`;
      giveHint(guess);
    }
  }
}

function giveHint(guess) {
  if (guess < randomNum) {
    displayMessage('Too low!');
  } 
  else {
    displayMessage('Too high!');
  }
}

function displayMessage(msg) {
  message.innerHTML = msg;
}

function endGame() {
  playGame = false;
  input.setAttribute('disabled', true);
  submit.value = 'Try Again';
}

function newGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  previousGuess = [];
  guessCount = 10;
  playGame = true;

  input.removeAttribute('disabled');
  input.value = '';
  message.innerHTML = '';
  result.innerHTML = `${guessCount} guess${guessCount !== 1 ? 'es' : ''} remaining.`;
  submit.value = 'Place Guess';
  data.innerHTML = '';

  console.log('New number:', randomNum);
}
