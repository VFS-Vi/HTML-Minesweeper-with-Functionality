import Board from '../modules/minesweeperBoard.js';
import GameLogic from '../modules/minesweeperLogic.js';
import UserInput from '../modules/userInput.js';

class GameEngine {
    constructor() {
        // Decorator pattern.
        this.gameBoard = new Board(16, 24);
        this.gameLogic = new GameLogic(this.gameBoard);
        this.userInput = new UserInput(this.gameLogic);
    }
}

export default GameEngine;