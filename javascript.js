function computerPlay(){
    let computerArray = ["Rock", "Paper", "Scissors"];
    rand = Math.random(1) * computerArray.length + 1;
    return Math.floor(rand)
}

function round(playerSelection, computerSelection){
    playerSelection = prompt("Please choose Rock, Paper, or Scissors")
    computerSelection = computerPlay();
    if(playerSelection == "Rock" && computerSelection == 1 || playerSelection == "Paper" && computerSelection == 2 || playerSelection == 3 && computerSelection == 3){
        return "It is a tie!"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));
