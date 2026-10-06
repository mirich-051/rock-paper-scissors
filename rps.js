const rockHum = document.querySelector("#btnRock");
const paperHum = document.querySelector("#btnPaper");
const scissorsHum = document.querySelector("#btnScissors");
const content = document.querySelector("div");


function print(text = "") {
  const line = document.createElement('p');   // one p per line
  line.textContent = text; // textContent = safe (no HTML injection)
  content.appendChild(line);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

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

  function getHumanChoice() {
    return "rock";
  }



  function playRound(humanChoice, computerChoice) {
    print(`${humanChoice} + ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      print("You won! Rock beats Scissors");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      print("You lose! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      print("You won! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      print("You lose! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      print("You won! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      print("You lose! Scissors beats Paper");
    } else {
      print("Draw!");
    }
    print();
  }

  // clear previous game before starting a new one
  content.innerHTML = "";
  print("Human : Computer");
  print();

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);





  if (humanScore === 5) {
    content.innerHTML = "";
    print("You won!");
    print("Human : Computer");
    print(`${humanScore} :  ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    content.innerHTML = "";
    print("Computer won!");
    print("Human : Computer");
    print(`${humanScore} :  ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
  }

}

rockHum.addEventListener("click", playGame);






