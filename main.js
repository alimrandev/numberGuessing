(function(){
// Selection
const p1MsgDisplay = document.querySelector('.p1Msg');
const p2MsgDisplay = document.querySelector('.p2Msg');
let p1GuessLeft = document.querySelector('.p1Left');
let p2GuessLeft = document.querySelector('.p2Left');
const playerOne = document.getElementById('p1Btn');
const playerTwo = document.getElementById('p2Btn');
const reset = document.getElementById('reset');
const p1Input = document.getElementById('playerOneInput');
const p2Input = document.getElementById('playerTwoInput');

let guessNumber = getRandom(1, 10);
let p1GuessLimit = 3;
let p2GuessLimit = 3;
let gameOver = false;

// set random number
function getRandom(min, max) {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Game Function
function gameProcess(input,playerInput,btn,guessLft,msg){

  if (guessNumber === playerInput) {
    gameOver = true;
    msg.textContent = `Player Guess is ${playerInput} correct. You won the game`;
    btn.classList.add('bg-success');
    input.setAttribute('disabled','disabled')
  } else {
    // guessLft--
    if (guessLft === 0) {
      gameOver = true;
      btn.classList.add('bg-danger');
      msg.textContent = `Game Over ${playerInput} not correct.`;
      input.setAttribute('disabled','disabled')
    } else {
      msg.textContent = `Your Guess is ${playerInput} not correct. ${guessLft} Guess Left`;
    };
  };
}
function resetGame(e){
  location.reload();
}
// Add Event to button
playerOne.addEventListener('click', () => {
  let p1InputValue = Number(p1Input.value);
  if (!gameOver) {
    p1GuessLimit--
    gameProcess(p1Input,p1InputValue,playerOne,p1GuessLimit,p1MsgDisplay);
  };
  
  p1Input.value = '';

});

playerTwo.addEventListener('click', () => {
  let p2InputValue = Number(p2Input.value);
  if (!gameOver) {
    p2GuessLimit--
    gameProcess(p2Input,p2InputValue,playerTwo,p2GuessLimit,p2MsgDisplay);
  };
  p2Input.value = '';

})

// reset
reset.addEventListener('click', resetGame);
})();