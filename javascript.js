const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const users = document.querySelector('#user')
const comp = document.querySelector('#comp')
const rounds = document.querySelector('#rounds')
const won = document.querySelector('#won')


function computerSelect(){
  options = ["Rock", "Paper", "Scissors"]
  x = Math.floor(Math.random() * 3)
  let computerChoice = options[x]
  return computerChoice
}

rock.addEventListener('click', () => {
  user = 'Rock'
  won.innerHTML = playRound(user, computerSelect())
})
paper.addEventListener('click', () => {
  user = 'Paper'
  won.innerHTML = playRound(user, computerSelect())
})
scissors.addEventListener('click', () => {
  user = 'Scissors'
  won.innerHTML = playRound(user, computerSelect())
  //console.log(playRound(user, computerSelect()))
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
  }else{
    round = 0;
  }
  
  
}

let round = 0
function win(){
  if(userScore == 5 || compScore == 5){
    if(compScore == 5){
      console.log("Computer has won!")
      round = 0
      userScore = 0;
      compScore = 0;
    }else if(userScore == 5){
      console.log("User has won!")
      round = 0
      userScore = 0;
      compScore = 0;
    }
  }else{
    round++
    console.log("Rounds: ", round)
  }
}