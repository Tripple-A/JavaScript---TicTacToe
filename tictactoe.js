const Player = name =>{
    return {name}
}
class Umpire {
  constructor (age) {
    this.age = age
  }

  sayResult () {
    console.log(`You are young at ${this.age}`)
  }
}

const game = (() => {
  let gameboard = [] 

  const play= (tool,position) => {
   gameboard[position] == null ? gameboard[position] = tool : console.log('Please,replay: Position picked is occupied')
  }
  return{
      gameboard , play
  } 
   
  })();

const player1 = Player('Jeff')
console.log(player1.name)
game.play('X',5)
game.play('Y',5)

console.log(game.gameboard[5])

new Umpire(10).sayResult()

