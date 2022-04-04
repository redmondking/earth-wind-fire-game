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

// Refactor playRound function for simplicity.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "earth" && computerSelection === "earth") {
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    gameTextEl.textContent = "Tie Game";
    // console.log(`tie game`);
  } else if (playerSelection === "earth" && computerSelection === "wind") {
    playerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    playerEl.textContent = playerScore;
    gameTextEl.textContent = "You Win";
    // console.log(`you win`);
  } else if (playerSelection === "earth" && computerSelection === "fire") {
    computerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    computerEl.textContent = computerScore;
    gameTextEl.textContent = "You Lose";
    // console.log(`you lose`);
  } else if (playerSelection === "wind" && computerSelection === "wind") {
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    gameTextEl.textContent = "Tie Game";
    // console.log(`tie game`);
  } else if (playerSelection === "wind" && computerSelection === "fire") {
    playerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    playerEl.textContent = playerScore;
    gameTextEl.textContent = "You Win";
    // console.log(`you win`);
  } else if (playerSelection === "wind" && computerSelection === "earth") {
    computerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    computerEl.textContent = computerScore;
    gameTextEl.textContent = "You Lose";
    // console.log(`you lose`);
  } else if (playerSelection === "fire" && computerSelection === "fire") {
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    gameTextEl.textContent = "Tie Game";
    // console.log(`tie game`);
  } else if (playerSelection === "fire" && computerSelection === "earth") {
    playerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    playerEl.textContent = playerScore;
    gameTextEl.textContent = "You Win";
    // console.log(`you win`);
  } else if (playerSelection === "wind" && computerSelection === "wind") {
    computerScore++;
    gameRoundNum++;
    roundEl.textContent = gameRoundNum;
    computerEl.textContent = computerScore;
    gameTextEl.textContent = "You Lose";
    // console.log(`you lose`);
  }
}

// earth beats wind
// wind beats fire
// fire beats earth
