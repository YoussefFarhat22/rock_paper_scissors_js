function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

// Test computer choice
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function getHumanChoice() {
  let userInput = prompt("Enter you choice !!").toLowerCase();
  return userInput;
}

// Test the user function
// console.log(getHumanChoice());

// Human and computer score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  } else {
    console.log("Its a draw!!");
  }
}

let computerSelection;
let humanSelection;

// playRound(humanSelection, computerSelection);

// console.log("Computer choice : " + computerSelection);
// console.log("Human choice : " + humanSelection);
// console.log("Human score : " + humanScore);
// console.log("Computer score : " + computerScore);

function playGame() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }

  if (computerScore > humanScore) {
    console.log("You lose !!");
  } else if (humanScore > computerScore) {
    console.log("You win !!");
  } else {
    console.log("DRAWW");
  }
}

playGame();
