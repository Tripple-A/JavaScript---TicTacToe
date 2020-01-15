const Player = name =>{
    return {name}
}

const game = (() => {
  let gameboard = [] 

  const play= (tool,position) => {
    gameboard[position] = tool
  }
  return{
      gameboard , play
  } 
   
  })();

const player1 = Player('Jeff')
console.log(player1.name)
game.play('X',5)
console.log(game.gameboard)
