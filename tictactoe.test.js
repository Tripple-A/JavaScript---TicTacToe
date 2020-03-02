jest.mock('./tictactoe.js');

test('should hide form when data is input', () => {
  document.body.innerHTML = '<div class="form">'
        + '<p>'
        + '<label for="player1"> Player 1 Name</label>'
        + '<input type="text" class="player1">'
        + '</p>'
        + '<p>'
            + '<label for="player2"> Player 2 Name</label>'
            + '<input type="text" class="player2">'
        + '</p>'
        + '<button id="start">START GAME</button>'
    + '</div>';

  // eslint-disable-next-line global-require
  const ticTacToe = require('./tictactoe');

  const form = document.querySelector('.form');

  document.getElementById('start').addEventListener('click', ticTacToe.Umpire.restartGame());
  expect(form.getAttribute('style')).toEqual('display:none;');
});