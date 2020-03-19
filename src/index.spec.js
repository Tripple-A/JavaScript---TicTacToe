/* eslint-disable global-require */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

jest.dontMock('fs');


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
  it('Should return string of default player names', () => {
    myGame.renderNotice('ttt-form');
    myGame.getDomEl('ttt-form').submit();
    expect(myGame.getDomEl('declare').innerHTML)
    .toEqual('Player One is playing X : Player Two is playing O');
  });
});