
/* const btn = document.querySelector('button');

function btnPlay() {
  let letter = prompt("Choose between r, p, or s. Please enter one letter: ");

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

for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice());
}