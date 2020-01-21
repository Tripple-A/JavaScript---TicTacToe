const Player = name =>{
    return {name}
}

const Player1 = Player('Jeff');
const Player2 = Player('Rama')
const squares = document.querySelectorAll('.squares')
let counter = 0

const game = (() => {
  let gameboard = [];

  const check = () => {
if(gameboard[0] == gameboard[1] && gameboard[0]== gameboard[2]) {
    return gameboard[0]
    } 
    return false
  }

  const clearboard = () => {
    gameboard = []
  }
  
  const play = (tool, position) => {
     gameboard[position] = tool
     console.log(gameboard)
  };
  return {
   check, play 
  };
})();

const Umpire = (() => {

  const startGame = () => {
    squares.forEach(square => {
      square.addEventListener('click', () => {
        document.querySelector('.warn').style.display = 'none'
        if (square.textContent == '') {
          counter % 2 == 0? square.textContent = 'X' : square.textContent = 'O'
          counter += 1
          game.play(square.textContent , parseInt(square.id - '1',10))
        if (this.sayResult()) {
           this.endGame() 
          }
        } else {
    document.querySelector('.warn').style.display = 'block'
        }
    })
    })    
  }
  const sayResult = () => {
    if (game.check() == 'X') {
      document.querySelector('.result').innerHTML = `Congratulations ${Player1.name}, You are the winner`
      return true
    } else if(game.check() == 'O') {
      document.querySelector('.result').innerHTML = `Congratulations ${Player2.name}, You are the winner`
      return true
    }
    return false
  }
const restartGame = () => {
  game.clearboard()
  squares.forEach(square => {
    square.textContent = ''
  })
}
   const endGame = () => {
    squares.forEach(button => {
      button.disabled = true
    })
  }
  return {
    endGame, restartGame, sayResult ,startGame
  }
  })();
