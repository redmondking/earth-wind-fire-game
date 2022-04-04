const playerEl = document.getElementById("player-score");
const computerEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round-counter");
const choiceArray = ["earth", "wind", "fire"];
const earthBtn = document.getElementById("earth-btn");
const windBtn = document.getElementById("wind-btn");
const fireBtn = document.getElementById("fire-btn");
const gameTextEl = document.getElementById("game-text");

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

  //   console.log(
  //     `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  //   );
};

windBtn.onclick = function () {
  playerSelection = choiceArray[1];
  computerPlay();
  playRound(playerSelection, computerSelection);

  //   console.log(
  //     `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  //   );
};

fireBtn.onclick = function () {
  playerSelection = choiceArray[2];
  computerPlay();
  playRound(playerSelection, computerSelection);

  //   console.log(
  //     `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  //   );
};

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "earth" && computerSelection === "wind") ||
    (playerSelection === "wind" && computerSelection === "fire") ||
    (playerSelection === "fire" && computerSelection === "earth")
  ) {
    playerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    playerEl.textContent = playerScore;
    gameTextEl.textContent = "You Win";
  } else if (
    (playerSelection === "earth" && computerSelection === "fire") ||
    (playerSelection === "wind" && computerSelection === "earth") ||
    (playerSelection === "wind" && computerSelection === "wind")
  ) {
    computerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    computerEl.textContent = computerScore;
    gameTextEl.textContent = "You Lose";
  } else gameRoundNum++;
  roundEl.textContent = gameRoundNum;
  gameTextEl.textContent = "Tie Game";
}
