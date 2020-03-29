const Player = name =>{
    return {name}
}

let Player1 = Player('Jeff');
let Player2 = Player('Rama')
const squares = document.querySelectorAll('.squares')
const form = document.querySelector('.form')
const replay = document.querySelector('.replay')
let name1 = document.querySelector('.player1')
let name2 = document.querySelector('.player2')
let counter = 0
let result = document.querySelector('.result')
const declare = document.getElementById('declare')
const error = document.querySelector('.error')
const container = document.querySelector('.container1')
const game = (() => {
  let gameboard = [];

  const check = () => {
    if(gameboard[0] == gameboard[1] && gameboard[0]== gameboard[2]) {
      return gameboard[0]
      } 
      if(gameboard[0] == gameboard[3] && gameboard[0]== gameboard[6]) {
        return gameboard[3]
        }   
      if(gameboard[1] == gameboard[7] && gameboard[1]== gameboard[4]) {
        return gameboard[1]
        } 
        if(gameboard[2] == gameboard[5] && gameboard[2]== gameboard[8]) {
          return gameboard[8]
          } 
         
      return false
  }

  const check2 = () => {
    if(gameboard[2] == gameboard[4] && gameboard[2]== gameboard[6]) {
      return gameboard[2]
      } 
    if(gameboard[0] == gameboard[4] && gameboard[0]== gameboard[8]) {
      return gameboard[0]
      } 
    if(gameboard[3] == gameboard[4] && gameboard[3]== gameboard[5]) {
      return gameboard[3]
      } 
      if(gameboard[6] == gameboard[7] && gameboard[6]== gameboard[8]) {
        return gameboard[6]
        } 
        
      return false
  }

  
  const clearboard = () => {
    gameboard = []
  }
  
  const play = (tool, position) => {
     gameboard[position] = tool
  };
  return {
   check,check2, clearboard, play
  };
})();

const display = (() => {
  const endGame = () => {
    squares.forEach(button => {
      button.disabled = true
      button.classList.add('greyer')
    })
    replay.style.display = 'block'
  }
  const startNew = () => {
    container.classList.add('d-none')
    endGame();
    form.classList.remove('d-none')
    replay.style.display = 'none'
    
      }
      const start = () => {
        if(name1.value == '' || name2.value == '') {
           error.textContent = 'The name fields cannot be empty'
          } else {
          Player1 = Player(name1.value)
          Player2 = Player(name2.value)
          declare.textContent = `${Player1.name} has 'X' : ${Player2.name} has 'O'`
          return true
        }
        return false
      }
  return {
    endGame, start, startNew
  }
})();

const Umpire = (() => {
  const startGame = () => {
    form.classList.add('d-none')
    container.classList.remove('d-none')
    
    squares.forEach(square => {
      square.classList.remove('greyer')
      square.addEventListener('click', () => {
        if (square.textContent == '') {
          document.querySelector('.warn').style.display = 'none'
          counter % 2 == 0? square.textContent = 'X' : square.textContent = 'O'
          counter % 2 == 0? square.style.color = 'green' : square.style.color = 'red'
          counter += 1
          game.play(square.textContent , parseInt(square.id - '1',10))
        Umpire.sayResult() || counter == 9 ? display.endGame() : null
        } 
    })
    })    
  }
  const sayResult = () => {
    result.innerHTML =''
    if (game.check() == 'X' || game.check2() == 'X') {
      result.innerHTML = `${Player1.name} won`
      return true
    } else if(game.check() == 'O' || game.check2() == 'O') {
      result.innerHTML = `${Player2.name} won`
      return true
    }
    counter == 9? result.innerHTML = 'It is a tie' : null
    return false
  }
const restartGame = () => {
  counter = 0;
  replay.style.display = 'none';
  result.textContent=''
  game.clearboard();
  squares.forEach(square => {
    square.textContent = ''
    square.disabled = false
    display.start()? Umpire.startGame() : null
  })
}
  return {
     restartGame, sayResult ,startGame
  }
  })();

  
