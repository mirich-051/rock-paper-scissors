  const rockHum = document.querySelector("#btnRock");
  const paperHum = document.querySelector("#btnPaper");
  const scissorsHum = document.querySelector("#btnScissors");



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
    console.log("");
  }

  let humanSelection = "";
  let computerSelection = "";
  let round = 0;

  console.log("Human : Computer");
  console.log("");


  console.log("----------------------");
  console.log("Human : Computer");
  console.log(humanScore + " : " + computerScore);

  if (humanScore > computerScore) {
    console.log("You won!")
  } else if (humanScore < computerScore) {
    console.log("Computer won!")
  } else {
    console.log("Game result: Draw")
  }



