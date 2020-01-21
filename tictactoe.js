const Player = name =>{
    return {name}
}

let Player1 = Player('Jeff');
let Player2 = Player('Rama')
const squares = document.querySelectorAll('.squares')
const form = document.querySelector('.form')
let name1 = document.querySelector('.player1')
let name2 = document.querySelector('.player2')
let counter = 0
let result = document.querySelector('.result')

const game = (() => {
  let gameboard = [];

  const check = () => {
if(gameboard[0] == gameboard[1] && gameboard[0]== gameboard[2]) {
    return gameboard[0]
    } 
    return false
  }

  const start = () => {
    if(name1.value != '' && name2.value != '') {
      Player1 = Player(name1.value)
      Player2 = Player(name2.value)
      return true
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
   check, clearboard, play, start
  };
})();

const Umpire = (() => {
  const startGame = () => {
    form.style.display = 'none'
    squares.forEach(square => {
      square.addEventListener('click', () => {
        if (square.textContent == '') {
          document.querySelector('.warn').style.display = 'none'
          counter % 2 == 0? square.textContent = 'X' : square.textContent = 'O'
          counter += 1
          game.play(square.textContent , parseInt(square.id - '1',10))
        Umpire.sayResult() || counter == 9 ? Umpire.endGame() : null
        } else {
    document.querySelector('.warn').style.display = 'block'
        }
    })
    })    
  }
  const sayResult = () => {
    result.style.display = 'block'
    if (game.check() == 'X') {
      result.innerHTML = `Congratulations ${Player1.name}, You are the winner`
      return true
    } else if(game.check() == 'O') {
      result.innerHTML = `Congratulations ${Player2.name}, You are the winner`
      return true
    }
    counter == 9? result.innerHTML = `This is a tie between ${Player1.name} and ${Player2.name}` : null
    return false
  }
const restartGame = () => {
  counter = 0;
  result.innerHTML = '';
  result.style.display = 'none';
  game.clearboard();
  squares.forEach(square => {
    square.textContent = ''
    square.disabled = false
    game.start()? Umpire.startGame() : null
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
