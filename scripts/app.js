const playerEl = document.getElementById("player-score");
const computerEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round-counter");
const choiceArray = ["Earth", "Wind", "Fire"];
const earthBtn = document.getElementById("earth-btn");
const windBtn = document.getElementById("wind-btn");
const fireBtn = document.getElementById("fire-btn");
const gameTextEl = document.getElementById("game-text");
const selectionTextEl = document.getElementById("selection-text");

let playerScore = 0;
let computerScore = 0;
let gameRoundNum = 0;

let playerSelection = "";
let computerSelection = "";

function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
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
  selectionTextEl.textContent = `Player chose ${playerSelection} and Computer chose ${computerSelection}.`;
  //   console.log(
  //     `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  //   );
};

windBtn.onclick = function () {
  playerSelection = choiceArray[1];
  computerPlay();
  playRound(playerSelection, computerSelection);
  selectionTextEl.textContent = `Player chose ${playerSelection} and Computer chose ${computerSelection}.`;
  //   console.log(
  //     `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  //   );
};

fireBtn.onclick = function () {
  playerSelection = choiceArray[2];
  computerPlay();
  playRound(playerSelection, computerSelection);
  selectionTextEl.textContent = `Player chose ${playerSelection} and Computer chose ${computerSelection}.`;
};

function playRound(playerSelection, computerSelection) {
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

function playerWin() {
  playerScore++;
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  playerEl.textContent = playerScore;
  gameTextEl.textContent = "You Won";
}

function playerLose() {
  computerScore++;
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  computerEl.textContent = computerScore;
  gameTextEl.textContent = "You Lost";
}

function playerTie() {
  gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  gameTextEl.textContent = "Tie Game";
}
