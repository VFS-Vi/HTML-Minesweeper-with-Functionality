class UserInput {
    constructor(gameLogic) {
        this.gameLogic = gameLogic;

        this.boundHandlerLeft = this.handleOpen.bind(this);
        this.boundHandlerRight = this.handleFlag.bind(this);

        this.resetEl = document.querySelector('#reset');
        this.easyEl = document.querySelector('#easy');
        this.normalEl = document.querySelector('#normal');
        this.hardEl = document.querySelector('#hard');

        this.flagsCount = document.querySelector('#flags');

        this.addEventListeners();
    }

    addEventListeners() {
        this.gameLogic.gameBoard.boardEl?.addEventListener('click', this.boundHandlerLeft);
        this.gameLogic.gameBoard.boardEl?.addEventListener('contextmenu', this.boundHandlerRight);
        this.resetEl?.addEventListener('click', () => this.resetGame());

        this.easyEl?.addEventListener('click', () => this.easyMode());
        this.normalEl?.addEventListener('click', () => this.normalMode());
        this.hardEl?.addEventListener('click', () => this.hardMode());
    }

    handleOpen(event) {
        const cell = event.target.closest('.cell');
        if (!cell) return;
        const index = parseInt(cell.dataset.index, 10);
        this.gameLogic.leftClickSquare(index);
    }

    handleFlag(event) {
        event.preventDefault();
        const cell = event.target.closest('.cell');
        if (!cell) return;
        const index = parseInt(cell.dataset.index, 10);
        this.gameLogic.rightClickSquare(index);
        this.flagsCount.innerHTML = this.gameLogic.gameBoard.minesLeft;
    }

    resetGame() {
        this.gameLogic.reset();
        this.flagsCount.innerHTML = this.gameLogic.gameBoard.minesLeft;
    }

    easyMode() {
        this.gameLogic.gameBoard.rows = 9;
        this.gameLogic.gameBoard.cols = 9;
        this.gameLogic.gameBoard.totalMines = 9;
        console.log('EASY');
        this.resetGame();
    }

    normalMode() {
        this.gameLogic.gameBoard.rows = 16;
        this.gameLogic.gameBoard.cols = 16;
        this.gameLogic.gameBoard.totalMines = 40;
        console.log('NORMAL');
        this.resetGame();
    }

    hardMode() {
        this.gameLogic.gameBoard.rows = 16;
        this.gameLogic.gameBoard.cols = 30;
        this.gameLogic.gameBoard.totalMines = 99;
        console.log('HARD');
        this.resetGame();
    }
}

export default UserInput;