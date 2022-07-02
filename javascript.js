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

const winner = document.createElement('div')
winner.classList.add('winner')

function playRound(user, computer){
  if(userScore != 5 && compScore != 5){
    winner.textContent = " "
    results.appendChild(winner)
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
        win()
        return "You win! Rock beats Scissors"
      }
    }else if(user == 'Paper'){
      if(computer == 'Rock'){
        userScore++
        win()
        return "You win! Paper beats Rock"
      }else if(computer == 'Scissors'){
        compScore++
        win()
        return "You lose! Scissors beats Paper"
      }
    }else if(user == 'Scissors'){
      if(computer == 'Rock'){
        compScore++
        win()
        return 'You lose! Rock beats Scissors'
      }else if(computer == 'Paper'){
        userScore++
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
      winner.textContent = "Computer has won!"
      results.appendChild(winner)
      display()
      round = 0
      userScore = 0;
      compScore = 0;
    }else if(userScore == 5){
      winner.textContent = "User has won!"
      results.appendChild(winner)
      display()
      round = 0
      userScore = 0;
      compScore = 0;
    }
  }else{
    round++
    display()
  }
}

function display(){
  users.innerHTML = 'User: ' + userScore
  comp.innerHTML = "Computer: " + compScore
  rounds.innerHTML = "Round: " + round
}