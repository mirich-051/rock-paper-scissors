  const rockHum = document.querySelector("#btnRock");
  const paperHum = document.querySelector("#btnPaper");
  const scissorsHum = document.querySelector("#btnScissors");
  const content = document.querySelector("div");



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
    rockHum.addEventListener("click", () => "rock");
    paperHum.addEventListener("click", () => "paper");
    scissorsHum.addEventListener("click", () => "scissors");
  }

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    content.textContent = `${humanChoice} + ${computerChoice}`;
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      content.textContent = "You won! Rock beats Scissors";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      content.textContent = "You lose! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      content.textContent = "You won! Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      content.textContent = "You lose! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      content.textContent = "You won! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      content.textContent = "You lose! Scissors beats Paper";
    } else {
      content.textContent = "Draw!";
    }
    content.textContent = "\n";
  }

  let humanSelection = "";
  let computerSelection = "";
  let round = 0;

  content.textContent = "Human : Computer";
  content.textContent = "\n";


  content.textContent = "----------------------";
  content.textContent = "Human : Computer";
  content.textContent = `${humanScore} :  ${computerScore}`;

  if (humanScore > computerScore) {
    content.textContent = "You won!";
  } else if (humanScore < computerScore) {
    content.textContent = "Computer won!";
  } else {
    content.textContent = "Game result: Draw";
  }



