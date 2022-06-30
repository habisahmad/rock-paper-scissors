const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

function computerSelect(){
  options = ["Rock", "Paper", "Scissors"]
  x = Math.floor(Math.random() * 3)
  let computerChoice = options[x]
  return computerChoice
}

rock.addEventListener('click', () => {
  user = 'Rock'
  console.log(playRound(user, computerSelect()))
})
paper.addEventListener('click', () => {
  user = 'Paper'
  console.log(playRound(user, computerSelect()))
})
scissors.addEventListener('click', () => {
  user = 'Scissors'
  console.log(playRound(user, computerSelect()))
})

function playRound(user, computer){
  if(user == computer){
    return "It is a tie!"
  }else if(user == 'Rock'){
    if(computer == 'Paper'){
      return "You lose! Paper beats Rock"
    }else if(computer == 'Scissors'){
      return "You win! Rock beats Scissors"
    }
  }else if(user == 'Paper'){
    if(computer == 'Rock'){
      return "You win! Paper beats Rock"
    }else if(computer == 'Scissors'){
      return "You lose! Scissors beats Paper"
    }
  }else if(user == 'Scissors'){
    if(computer == 'Rock'){
      return 'You lose! Rock beats Scissors'
    }else if(computer == 'Paper'){
      return "You win! Scissors beats Paper"
    }
  }
}