const rockHum = document.querySelector("#btnRock");
const paperHum = document.querySelector("#btnPaper");
const scissorsHum = document.querySelector("#btnScissors");
const content = document.querySelector("div");

function print(text = "", cls = "") {
  const line = document.createElement('p');   // one p per line
  line.textContent = text; // textContent = safe (no HTML injection)
  if (cls) {line.className = cls;}
  content.appendChild(line);
}

let humanSelection = "";
function getHumanChoiceRock() {
  humanSelection = "rock";
  return humanSelection;
}

function getHumanChoicePaper() {
  humanSelection = "paper";
  return humanSelection;
}

function getHumanChoiceScissors() {
  humanSelection = "scissors";
  return humanSelection;
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

  function playRound(humanChoice, computerChoice) {
    print(`${humanChoice} + ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      print("You won!", "win");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      print("You lose!", "lose");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      print("You won!", "win");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      print("You lose!", "lose");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      print("You won!", "win");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      print("You lose!", "lose");
    } else {
      print("Draw!");
    }
    print();
  }

  // clear previous game before starting a new one
  content.innerHTML = "";
  print("Human : Computer");
  print();

  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // It tracks the score and declares the winner to be the first to reach five victories.
  if (humanScore === 5) {
    content.innerHTML = "";
    print("You won!", "win");
    print("Human : Computer", "win");
    print(`${humanScore} :  ${computerScore}`, "win");
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    content.innerHTML = "";
    print("Computer won!", "lose");
    print("Human : Computer", "lose");
    print(`${humanScore} :  ${computerScore}`, "lose");
    humanScore = 0;
    computerScore = 0;
  }
}

rockHum.addEventListener("click", getHumanChoiceRock);
rockHum.addEventListener("click", playGame);

paperHum.addEventListener("click", getHumanChoicePaper);
paperHum.addEventListener("click", playGame);

scissorsHum.addEventListener("click", getHumanChoiceScissors);
scissorsHum.addEventListener("click", playGame);






