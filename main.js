let computerScore = 0;
let playerScore = 0;

function rando() {
  return Math.floor(Math.random() * 3) + 1;
}

function computerPlay() {
  let random = rando();
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else if (random == 3) {
    return "scissors";
  }
}

// let computerSelection = computerPlay();

// let playerSelection = prompt(
//   "Rock Paper Scissors.\nPlease choose:"
// ).toLowerCase();

// console.log("Computer chooses " + computerSelection);
// console.log("You choose " + playerSelection);

function game(x, y) {
  if (x == y) {
    console.log("Tie!");
  } else if (
    (x == "rock" && y == "scissors") ||
    (x == "scissors" && y == "paper") ||
    (x == "paper" && y == "rock")
  ) {
    console.log("You Lose!");
    computerScore += 1;
  } else if (
    (y == "rock" && x == "scissors") ||
    (y == "scissors" && x == "paper") ||
    (y == "paper" && x == "rock")
  ) {
    console.log("You Win!");
    playerScore += 1;
  } else {
    console.log("What?");
  }
}

//game(computerSelection, playerSelection);

function reload() {
  location.reload();
}

function repeat() {
  console.clear();
  for (let i = 1; i < 6; i++) {
    console.log("");
    console.log("%cRound", "font-weight: bold", +i);
    rando();
    computerPlay();

    let computerSelection = computerPlay();

    let playerSelection = prompt(
      "Rock Paper Scissors.\nPlease choose:"
    ).toLowerCase();

    console.log("Computer chooses " + computerSelection);
    console.log("You choose " + playerSelection);

    game(computerSelection, playerSelection);
  }
  console.log("");
  console.log("Computer wins " + computerScore + " games");
  console.log("Player wins " + playerScore + " games");
  if (computerScore > playerScore) {
    console.log("%cSorry. Computer Wins.", "color:red; font-weight: bold");
  } else if (playerScore > computerScore) {
    console.log(
      "%cYou Win!! Congratulations!!",
      "color:green; font-weight: bold"
    );
  } else if (playerScore == computerScore) {
    console.log("%cIt's a tie!", "font-weight: bold");
  } else {
    console.log(
      "%cWhat is even happening right now?",
      "color: blue; font-size: 120px"
    );
  }
  playerScore = 0;
  computerScore = 0;
}
