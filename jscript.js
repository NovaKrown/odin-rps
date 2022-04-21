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

let computerSelection = computerPlay();
//console.log(computerSelection);

let playerSelection = prompt(
  "Rock Paper Scissors.\nPlease choose:"
).toLowerCase();

console.log("Computer chooses " + computerSelection);
console.log("You choose " + playerSelection);

function game(x, y) {
  if (x == y) {
    console.log("Tie!");
  } else if (
    (x == "rock" && y == "scissors") ||
    (x == "scissors" && y == "paper") ||
    (x == "paper" && y == "rock")
  ) {
    console.log("You Lose!");
  } else if (
    (y == "rock" && x == "scissors") ||
    (y == "scissors" && x == "paper") ||
    (y == "paper" && x == "rock")
  ) {
    console.log("You Win!");
  } else {
    console.log("What?");
  }
}

game(computerSelection, playerSelection);

function reload() {
  location.reload();
}
