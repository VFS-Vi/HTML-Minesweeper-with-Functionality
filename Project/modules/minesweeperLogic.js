class Logic {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.currentPlayer = 'X'
        this.gameOver = false;
    }

    leftClickSquare(index) {
        if (this.gameOver) return;

        this.gameBoard.openSquare(index);
    };

    rightClickSquare(index) {
        if (this.gameOver) return;

        this.gameBoard.flagSquare(index);
    };

    reset() {
        this.gameOver = false;
        this.gameBoard.reset();
    }
}

export default Logic;