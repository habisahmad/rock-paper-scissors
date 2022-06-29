function computerPlay() {
    array = ["Rock", "Paper", "Scissors"];
    const x = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    return array.at(x)
  }

function playerSelect(){
  const rock = document.querySelector('.rock')
  const scissors = document.querySelector('.scissors')
  const paper = document.querySelector('.paper')
  rock.onclick = () => {
    return "Rock"
  }
  paper.onclick = () => {
    return "Paper"
  }
  scissors.onclick = () => {
    return "Scissors"
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
