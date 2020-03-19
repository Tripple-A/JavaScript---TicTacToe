/* eslint-disable new-cap */
/* eslint-disable global-require */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

describe('Test DOM', () => {
  document.documentElement.innerHTML = html.toString();

  it('Document can be loaded', () => {
    expect(document.body.children.length).toEqual(2);
  });

  it('Loaded doucment should have form with three children', () => {
    expect(document.getElementById('ttt-form').children.length).toEqual(3);
  });

  it('Loaded doucment should have gameboard with 9 children', () => {
    expect(document.getElementById('gameboard').children.length).toEqual(9);
  });
  const myGame = require('./index');

  it('Should return contents of a dom element player1', () => {
    expect(myGame.getDomEl('player1').getAttribute('class')).toBe('form-control');
  });
  it('Should return contents of a dom element player2', () => {
    expect(myGame.getDomEl('player2').getAttribute('class')).toBe('form-control');
  });
});

describe('Test game logic', () => {
  document.documentElement.innerHTML = html.toString();
  const myGame = require('./index');
  beforeEach(() => {
    myGame.renderNotice('ttt-form');
    myGame.launchGame();
    myGame.currentPlayer = 0;
    myGame.movesPlayed = 0;
  });

  test('First player should be X', () => {
    expect(myGame.players[0]).toBe('x');
  });

  test('Other player should be O', () => {
    expect(myGame.players[1]).toBe('o');
  });

  test('First Player Can place an X ', () => {
    const sq1 = myGame.squaresArray[1];
    myGame.setMove(sq1, 0);
    expect(myGame.gameState[0]).toBe('x');
  });

  test('Player 1 wins in a row', () => {
    //
    myGame.setMove(myGame.squaresArray[0], 0);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[4], 4);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[1], 1);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[3], 3);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[2], 2);

    expect(myGame.checkIfWon()).toEqual('x');
  });

  test('Player 2 wins in a row', () => {
    myGame.setMove(myGame.squaresArray[0], 0);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[4], 4);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[1], 1);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[3], 3);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[7], 7);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[5], 5);

    expect(myGame.checkIfWon()).toEqual('o');
  });

  it('Player 1 wins in a column', () => {
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[0], 0);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[1], 1);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[3], 3);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[5], 5);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[6], 6);
    expect(myGame.checkIfWon()).toEqual('x');
  });

  it('Player 1 wins in a diagonal', () => {
    myGame.setMove(myGame.squaresArray[0], 0);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[1], 1);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[4], 4);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[3], 3);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[8], 8);

    expect(myGame.checkIfWon()).toEqual('x');
  });

  it('Player 1 and Player 2 draw', () => {
    myGame.setMove(myGame.squaresArray[1], 1);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[0], 0);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[2], 2);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[4], 4);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[8], 8);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[5], 5);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[3], 3);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[6], 6);
    myGame.changePlayer();
    myGame.setMove(myGame.squaresArray[7], 7);

    expect(myGame.checkIfWon()).toEqual('draw');
  });
});
