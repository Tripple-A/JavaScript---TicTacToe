const Player = name =>{
    return {name}
}

const Player1 = Player('Jeff');

const squares = document.querySelectorAll('.squares')
let counter = 0
squares.forEach(square => {
  square.addEventListener('click', () => {
    document.querySelector('.warn').style.display = 'none'
    if (square.textContent == '') {
      counter % 2 == 0? square.textContent = 'X' : square.textContent = 'O'
      counter += 1
      game.play(square.textContent , parseInt(square.id - '1',10))
    if ( Umpire.sayResult() ) { Umpire.endGame()}
    } else {
document.querySelector('.warn').style.display = 'block'
    }
})
})
const Umpire = (() => {
const sayResult = () => {
  if (game.check() == 'X') {
    document.querySelector('.result').innerHTML = `Congratulations ${Player1.name}, You are the winner`
    return true
  }
}

const endGame = () => {
  squares.forEach(button => {
    button.disabled = true
  })
}
return {
  endGame, sayResult
}
})();

const game = (() => {
  const gameboard = [];

  const check = () => {
if((gameboard[0] == gameboard[1] && gameboard[0]== gameboard[2]) || 
  (gameboard[0] == gameboard[3] && gameboard[0]== gameboard[6])) {
    return gameboard[0]
    }
  }

  const play = (tool, position) => {
     gameboard[position] = tool
     console.log(gameboard)
  };
  return {
   check, gameboard, play 
  };
})();

