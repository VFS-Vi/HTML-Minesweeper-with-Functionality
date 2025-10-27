import Board from '../modules/minesweeperBoard.js';
import GameLogic from '../modules/minesweeperLogic.js';
import UserInput from '../modules/userInput.js';

class GameEngine {
    constructor() {
        // Decorator pattern.
        this.boardEl = document.querySelector('#board');

        this.gameBoard = new Board(9, 9, 10, this.boardEl);
        this.gameBoard.initializeBoard();
        this.gameLogic = new GameLogic(this.gameBoard);
        
        this.userInput = new UserInput(this.gameLogic);
    }
}

export default GameEngine;