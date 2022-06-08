function computerPlay(){
    let computerArray = ["Rock", "Paper", "Scissors"];
    const rand = Math.random(0) * computerArray.length;
    let x = Math.floor(rand);
    return computerArray.at(x);
}

function round(playerSelection, computerSelection){
    let input = prompt("What is your answer?")
}

const playerSelection = "rock";
const computerSelection = computerPlay();
round(playerSelection, computerSelection)
