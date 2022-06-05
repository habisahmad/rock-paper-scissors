function computerPlay(){
    let computerArray = ["Rock", "Paper", "Scissors"];
    rand = Math.random(1) * computerArray.length + 1;
    return Math.floor(rand)
}

console.log(computerPlay())