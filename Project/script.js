class TicTacToe {
    constructor() {
        this.board = Array(64).fill('')// arrays in js are dynamic

        this.isGameOver = false;

        this.cells = [];

        this.boardEl = document.querySelector('#board');
        this.resetBtn = document.querySelector('#reset');

        this.init()
    };

    init = () => {
        this.boardEl.innerHTML = '';
        this.cells = [];

        this.board.map((_, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = index;

            cell.addEventListener('click', () => this.openSquare(index)); /// () => stores it 
            cell.addEventListener('contextmenu', () => this.flagSquare(index)); /// () => stores it 
            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

        this.resetBtn.addEventListener('click', this.resetGame); /// nothing needs to be passed through
    };

    openSquare = (index) => {
        if (this.board[index] || this.isGameOver) return;

        this.board[index] = "X"; // data of grid
        this.cells[index].textContent = "X"; // data of grid

        if (this.checkWin()) {

        }
    };

    flagSquare = (index) => {
        event.preventDefault();
        if (this.board[index] || this.isGameOver) return;

        this.board[index] = "O"; // data of grid
        this.cells[index].textContent = "O"; // data of grid

        if (this.checkWin()) {

        }
    };

    resetGame = () => {
        this.board = Array(9).fill('')// arrays in js are dynamic

        this.isGameOver = false;

        this.cells.forEach(cell => cell.textContent = '');
    }

}

new TicTacToe();