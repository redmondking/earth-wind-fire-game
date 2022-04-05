const playerEl = document.getElementById("player-score");
const playerElMobile = document.getElementById("player-score-mobile");
const computerEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round-counter");
const roundElMobile = document.getElementById("round-counter-mobile");
const choiceArray = ["Earth", "Wind", "Fire"];
const earthBtn = document.getElementById("earth-btn");
const windBtn = document.getElementById("wind-btn");
const fireBtn = document.getElementById("fire-btn");
const gameOverEl = document.getElementById("game-over-text");
const gameTextEl = document.getElementById("game-text");
const selectionTextEl = document.getElementById("selection-text");
const gameOverDiv = document.getElementById("game-over-div");
const gameScreen = document.getElementById("game-screen");
const newGameBtn = document.getElementById("new-game");

let playerScore = 0;
let computerScore = 0;
let gameRoundNum = 0;
let tieGame = 0;

let playerSelection = "";
let computerSelection = "";

function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerSelection = choiceArray[0];
  } else if (randomNumber === 2) {
    computerSelection = choiceArray[1];
  } else computerSelection = choiceArray[2];
}

earthBtn.onclick = function () {
  playerSelection = choiceArray[0];
  computerPlay();
  playRound(playerSelection, computerSelection);
};

windBtn.onclick = function () {
  playerSelection = choiceArray[1];
  computerPlay();
  playRound(playerSelection, computerSelection);
};

fireBtn.onclick = function () {
  playerSelection = choiceArray[2];
  computerPlay();
  playRound(playerSelection, computerSelection);
};

newGameBtn.onclick = function () {
  newGame();
};

function playRound(playerSelection, computerSelection) {
  selectionTextEl.textContent = `You chose ${playerSelection} and the Computer chose ${computerSelection}.`;
  if (
    (playerSelection === choiceArray[0] &&
      computerSelection === choiceArray[1]) ||
    (playerSelection === choiceArray[1] &&
      computerSelection === choiceArray[2]) ||
    (playerSelection === choiceArray[2] && computerSelection === choiceArray[0])
  ) {
    playerWin();
  } else if (
    (playerSelection === choiceArray[0] &&
      computerSelection === choiceArray[2]) ||
    (playerSelection === choiceArray[1] &&
      computerSelection === choiceArray[0]) ||
    (playerSelection === choiceArray[2] && computerSelection === choiceArray[1])
  ) {
    playerLose();
  } else playerTie();
}

function gameOver() {
  if (playerScore > computerScore) {
    gameOverEl.textContent = `You beat the Computer ${playerScore} to ${computerScore}.`;
    selectionTextEl.textContent = "";
    gameTextEl.textContent = "Choose an element below to start a game.";
    gameOverDiv.classList.remove("d-none");
    gameScreen.classList.add("d-none");
  } else if (playerScore === computerScore) {
    gameOverEl.textContent = `You tied with the Computer ${playerScore} to ${computerScore}.`;
    gameTextEl.textContent = "Choose an element below to start a game.";
    selectionTextEl.textContent = "";
    gameOverDiv.classList.remove("d-none");
    gameScreen.classList.add("d-none");
  } else
    gameOverEl.textContent = `You lost to the Computer ${playerScore} to ${computerScore}.`;
  gameTextEl.textContent = "Choose an element below to start a game.";
  selectionTextEl.textContent = "";
  gameOverDiv.classList.remove("d-none");
  gameScreen.classList.add("d-none");
}

function playerWin() {
  playerScore++;
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  roundElMobile.textContent = gameRoundNum;
  playerEl.textContent = playerScore;
  playerElMobile.textContent = playerScore;
  gameTextEl.textContent = "You Won";
  gameRoundCheck();
}

function playerLose() {
  computerScore++;
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  roundElMobile.textContent = gameRoundNum;
  computerEl.textContent = computerScore;
  gameTextEl.textContent = "You Lost";
  gameRoundCheck();
}

function playerTie() {
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  roundElMobile.textContent = gameRoundNum;
  gameTextEl.textContent = "Tie Game";
  gameRoundCheck();
}

function gameRoundCheck() {
  if (gameRoundNum === 5) {
    gameOver();
    console.log(gameRoundNum);
  }
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  gameRoundNum = 0;
  roundEl.textContent = gameRoundNum;
  roundElMobile.textContent = gameRoundNum;
  playerEl.textContent = playerScore;
  playerElMobile.textContent = gameRoundNum;
  computerEl.textContent = computerScore;
  gameOverDiv.classList.add("d-none");
  gameScreen.classList.remove("d-none");
}
