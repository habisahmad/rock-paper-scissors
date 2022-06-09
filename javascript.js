function computerPlay() {
    array = ["Rock", "Paper", "Scissors"];
    const x = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    return array.at(x)
  }
  function round(computerSelection){
    let rock = "rock"
    let scissors = "scissors"
    let paper = "paper"
    let playerSelection = prompt("What is your answer");
    let playerSelect = playerSelection.toUpperCase();
    let computerSelect = computerSelection.toUpperCase();
    let compare = playerSelect.localeCompare(computerSelect);
    win = 1;
    loss = 0;
    if(compare == 0){
      return "It is a tie!"
    }else if (playerSelect === rock.toUpperCase() && computerSelect === paper.toUpperCase()){ // All conditions in which the player loses
      console.log("You have lost! Paper beats rock")
      return loss
    }else if(playerSelect === paper.toUpperCase() && computerSelect === scissors.toUpperCase()){
      console.log("You have lost! Scissors beats paper")
      return loss
    }else if(playerSelect === scissors.toUpperCase() && computerSelect === rock.toUpperCase()){
      console.log("You have lost! Rock beats Scisors") 
      return loss
    }else if (playerSelect === rock.toUpperCase() && computerSelect === scissors.toUpperCase() ){
      console.log("You have Won! Rock beats Scissors") 
      return win
    }else if(playerSelect === paper.toUpperCase() && computerSelect === rock.toUpperCase()){
      console.log("You have Won! Paper beats Rock")
      return win
    }else if(playerSelect === scissors.toUpperCase() && computerSelect === paper.toUpperCase()){
      console.log("You have won! Scissors beats Paper!") 
      return win
    }
  }
  
  function game(win){
    let computerSelection = computerPlay()
    let ans = round(computerSelection);
    let nt = 0;
    if(ans == 1){
        nt++
    }else if(ans == 0){
        nt--
    }else{
        return "It is a tie!"
    }   
    return "Score: " + nt
  }
  let computerSelection = computerPlay()
for(let i = 0; i < 5; i++){
    round(computerSelection)
}
console.log(game())
 