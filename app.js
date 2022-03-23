//* Complete Logic of the game inside this function

const game = () => {
  let playerScore = 0
  let computerScore = 0
  let moves = 0

  //* Function to playGame

  const playGame = () => {
    const rockBtn = document.querySelector('.rock')
    const paperBtn = document.querySelector('.paper')
    const scissorsBtn = document.querySelector('.scissor')
    const playerOptions = [rockBtn, paperBtn, scissorsBtn]
    const computerOptions = ['rock', 'paper', 'scissors']

    //* Function Start playing the game

    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft')
        moves++
        movesLeft.innerText = `Moves Left: ${10 - moves}`
        const compChoiceNumber = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[compChoiceNumber]
        //*Function to check who wins
        winner(this.innerText, computerChoice)

        //*Game is over after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft)
        }
      })
    })
  }

  //*Function to decide who wins the game
  const winner = (player, computer) => {
    const result = document.querySelector('.result')
    let playerScoreBoard = document.querySelector('.p-count')
    let computerScoreBoard = document.querySelector('.c-count')
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if (player === computer) {
      result.textContent = 'Tie'
    } else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'Computer Won'
        computerScore++
        computerScoreBoard.textContent = computerScore
      } else {
        result.textContent = 'Player Won'
        playerScore++
        playerScoreBoard.textContent = playerScore
      }
    } else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent = 'Computer Won'
        computerScore++
        computerScoreBoard = computerScore
      } else {
        result.textContent = 'Player Won'
        playerScore++
        playerScoreBoard = playerScore
      }
    } else if (player == 'paper') {
      if (computer == 'scissor') {
        result.textContent = 'Computer Won'
        computerScore++
        computerScoreBoard = computerScore
      } else {
        result.textContent = 'Player Won'
        playerScore++
        playerScoreBoard = playerScore
      }
    }
  }
  //*Function that runs  when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move')
    const result = document.querySelector('.result')
    const reloadBtn = document.querySelector('.reload')
    playerOptions.forEach((option) => {
      option.style.display = ' none'
    })
    chooseMove.innerText = 'Game Over!!!'
    movesLeft.style.display = 'none'
    if (playerScore > computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You Won The Game'
      result.style.color = '#308D46'
    } else if (playerScore < computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You Lost The Game'
      result.style.color = 'red'
    } else {
      result.style.fontSize = '2rem'
      result.innerText = 'Its a Tie'
      result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart'
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click', () => {
      window.location.reload()
    })
  }
  playGame()
}
game()
