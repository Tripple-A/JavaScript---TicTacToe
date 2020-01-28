# JavaScript---TicTacToe
This is an implementation of the TicTacToe game using JavaScript
* Players are initiated using a factory function and on start of game,they are required to input their names
* Javascript module functions are used to declare the game playing functions and the gameboard is inaccessible s it is not declared in the return function.
* Functions for DOM are seperate from functions that control the game,though they are not in different files.
* There is a game-board which contains 9 boxes,each player would click on a box of choice in order to append his playing tool(either X or Y)
* The first player automatically gets the 'X' tool and the 2nd player the 'O' tool.
* A player wins when his tool is aligned vertically, horizontally or diagonally.
* A player can start a game afresh in which case he and his partner have to re-input their names or restart his previous game in which case,the previous names are on auto-save and will continually be used.
* When a player wins,the board is still on display but the buttons are disabled and no further move can be made.
