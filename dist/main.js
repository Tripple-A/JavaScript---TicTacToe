/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-restricted-syntax */\n/* eslint-disable func-names */\n\nconst getDomEl = (id) => {\n  const domEl = document.getElementById(id);\n  return domEl;\n};\n\nconst playerNames = [];\n\ngetDomEl('ttt-form').addEventListener('submit', (e) => {\n  playerNames[0] = getDomEl('player1').value;\n  playerNames[1] = getDomEl('player2').value;\n  getDomEl('gameboard').classList.remove('d-none');\n  getDomEl('ttt-form').classList.add('d-none');\n  getDomEl(\n    'declare',\n  ).innerText = `${playerNames[0]} is playing X : ${playerNames[1]} is playing O`;\n  e.preventDefault();\n});\n\n\nconst gameboard = document.getElementById('gameboard');\nconst squares = gameboard.querySelectorAll('.square');\nconst squaresArray = Array.from(squares);\nconst winStates = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8],\n  [0, 3, 6],\n  [1, 4, 7],\n  [2, 5, 8],\n  [0, 4, 8],\n  [2, 4, 6],\n];\nconst players = ['x', 'o'];\n\nlet gameState = ['', '', '', '', '', '', '', '', ''];\nlet currentPlayer = 0;\nlet cp = players[currentPlayer];\nlet movesDone = 0;\n\n\nfunction setMove(self, i) {\n  self.classList.add(cp);\n  gameState[i] = cp;\n  movesDone += 1;\n}\n\n\nfunction clearState() {\n  gameState = ['', '', '', '', '', '', '', '', ''];\n  movesDone = 0;\n\n  squares.forEach(square => {\n    square.classList.remove('x');\n    square.classList.remove('o');\n  });\n}\n\n\nfunction changePlayer() {\n  currentPlayer = 1 - currentPlayer;\n  cp = players[currentPlayer];\n}\n\nfunction myNotice(alert) {\n  document.getElementById('notice').innerText = alert;\n  getDomEl('gameboard').classList.add('d-none');\n  getDomEl('replay').classList.remove('d-none');\n}\n\nfunction checkIfWon() {\n  if (movesDone > 2) {\n    for (const winState of winStates) {\n      let Xs = 0;\n      let Os = 0;\n\n      for (const squareIndex of winState) {\n        if (gameState[squareIndex] === 'x') {\n          Xs += 1;\n        } else if (gameState[squareIndex] === 'o') {\n          Os += 1;\n        }\n      }\n\n      if (Xs === 3) {\n        myNotice(`${playerNames[0]} won!`);\n        clearState();\n        break;\n      }\n\n      if (Os === 3) {\n        myNotice(`${playerNames[1]} won!`);\n        clearState();\n        break;\n      }\n    }\n\n    if (movesDone === 9) {\n      myNotice('Draw!');\n      clearState();\n    }\n  }\n}\nfunction launchGame() {\n  for (let i = 0; i < squaresArray.length; i += 1) {\n    const square = squaresArray[i];\n\n    square.addEventListener('click', function () {\n      const isTickedAgain = this.classList.contains('x') || this.classList.contains('o');\n\n      if (!isTickedAgain) {\n        setMove(this, i);\n        checkIfWon();\n        changePlayer();\n      }\n    });\n  }\n}\n\n\nlaunchGame();\n\ngetDomEl('replay').addEventListener('click', (e) => {\n  getDomEl('gameboard').classList.remove('d-none');\n  getDomEl('notice').innerText = '';\n  getDomEl('replay').classList.add('d-none');\n  e.preventDefault();\n});\n\nmodule.exports = {\n  // Game Methods\n  startGame: launchGame,\n  setMov: setMove,\n  clearSt: clearState,\n  changeP: changePlayer,\n  checkWin: checkIfWon,\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });