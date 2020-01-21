const Player = name =>{
    return {name}
}

const squares = document.querySelectorAll('.squares')
let counter = 0
squares.forEach(square => {
  square.addEventListener('click', () => {
    document.querySelector('.warn').style.display = 'none'
    if (square.textContent == '') {
      counter % 2 == 0? square.textContent = 'X' : square.textContent = 'O'
      counter += 1
      game.play(square.textContent , parseInt(square.id - '1',10))
    } else {
document.querySelector('.warn').style.display = 'block'
    }
})
})

class Umpire {
  constructor (age) {
    this.age = age
  }

  sayResult () {
    console.log(`You are young at ${this.age}`)
  }
}

const game = (() => {
  const gameboard = [];

  const play = (tool, position) => {
     gameboard[position] = tool
     console.log(gameboard)
  };
  return {
    gameboard, play
  };
})();

const player1 = Player('Jeff');
new Umpire(10).sayResult()

console.log(game.gameboard[5]);
