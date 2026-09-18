
/* const btn = document.querySelector('button');

function btnPlay() {
  

}
btn.addEventListener('click', btnPlay); */

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else if (num === 3) {
    return "scissors";
  }
}

/* for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice());
} */

function getHumanChoice() {
  let letter = (prompt("Choose between r, p, or s. Please enter one letter: "))[0].toLowerCase();

  if (letter === "r") {
    return "rock";
  } else if (letter === "p") {
    return "paper";
  } else if (letter === "s") {
    return "scissors";
  }
}

//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log("Human : Computer");
  console.log(humanChoice + " : " + computerChoice);
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You won! Rock beats Scissors");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You won! Scissors beats Paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You won! Paper beats Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper");
  } else {
    console.log("Draw!")
  }
  console.log();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
