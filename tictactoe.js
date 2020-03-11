/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */

const getDomEl = (id) => {
  const domEl = document.getElementById(id);
  return domEl;
};

const playerNames = [];

getDomEl('ttt-form').addEventListener('submit', (e) => {
  playerNames[0] = getDomEl('player1').value;
  playerNames[1] = getDomEl('player2').value;
  getDomEl('gameboard').classList.remove('d-none');
  getDomEl('ttt-form').classList.add('d-none');
  getDomEl(
    'declare',
  ).innerText = `${playerNames[0]} is playing X : ${playerNames[1]} is playing O`;
  e.preventDefault();
});


const gameboard = document.getElementById('gameboard');
const squares = gameboard.querySelectorAll('.square');
const squaresArray = Array.from(squares);
const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const players = ['x', 'o'];

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 0;
let cp = players[currentPlayer];
let movesDone = 0;


function setMove(self, i) {
  self.classList.add(cp);
  gameState[i] = cp;
  movesDone += 1;
}


function clearState() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  movesDone = 0;

  squares.forEach(square => {
    square.classList.remove('x');
    square.classList.remove('o');
  });
}


function changePlayer() {
  currentPlayer = 1 - currentPlayer;
  cp = players[currentPlayer];
}

function myNotice(alert) {
  document.getElementById('notice').innerText = alert;
  getDomEl('gameboard').classList.add('d-none');
  getDomEl('replay').classList.remove('d-none');
}

function checkIfWon() {
  if (movesDone > 2) {
    for (const winState of winStates) {
      let Xs = 0;
      let Os = 0;

      for (const squareIndex of winState) {
        if (gameState[squareIndex] === 'x') {
          Xs += 1;
        } else if (gameState[squareIndex] === 'o') {
          Os += 1;
        }
      }

      if (Xs === 3) {
        myNotice(`${playerNames[0]} won!`);
        clearState();
        break;
      }

      if (Os === 3) {
        myNotice(`${playerNames[1]} won!`);
        clearState();
        break;
      }
    }

    if (movesDone === 9) {
      myNotice('Draw!');
      clearState();
    }
  }
}
function launchGame() {
  for (let i = 0; i < squaresArray.length; i += 1) {
    const square = squaresArray[i];

    square.addEventListener('click', function () {
      const isTickedAgain = this.classList.contains('x') || this.classList.contains('o');

      if (!isTickedAgain) {
        setMove(this, i);
        checkIfWon();
        changePlayer();
      }
    });
  }
}


launchGame();

getDomEl('replay').addEventListener('click', (e) => {
  getDomEl('gameboard').classList.remove('d-none');
  getDomEl('notice').innerText = '';
  getDomEl('replay').classList.add('d-none');
  e.preventDefault();
});
