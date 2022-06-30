const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('.results')

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
let compScore = 0;
let userScore = 0;

function playRound(user, computer){
  if(userScore != 5 && compScore != 5){
    if(user == computer){
      win()
      return "It is a tie!"
    }else if(user == 'Rock'){
      if(computer == 'Paper'){
        compScore++
        console.log(compScore, userScore)
        win()
        return "You lose! Paper beats Rock"
      }else if(computer == 'Scissors'){
        userScore++
        console.log(compScore, userScore)
        win()
        return "You win! Rock beats Scissors"
      }
    }else if(user == 'Paper'){
      if(computer == 'Rock'){
        userScore++
        console.log(compScore, userScore)
        win()
        return "You win! Paper beats Rock"
      }else if(computer == 'Scissors'){
        compScore++
        console.log(compScore, userScore)
        win()
        return "You lose! Scissors beats Paper"
      }
    }else if(user == 'Scissors'){
      if(computer == 'Rock'){
        compScore++
        console.log(compScore, userScore)
        win()
        return 'You lose! Rock beats Scissors'
      }else if(computer == 'Paper'){
        userScore++
        console.log(compScore, userScore)
        win()
        return "You win! Scissors beats Paper"
      }
    }
  }
  
  
}
let round = 0
function win(){
  if(userScore == 5 || compScore == 5){
    if(compScore == 5){
      console.log("Computer has won!")
    }else if(userScore == 5){
      console.log("User has won!")
    }
  }else{
    round++
    console.log("Rounds: ", round)
  }
}