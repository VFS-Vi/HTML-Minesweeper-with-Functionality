class Board {
    constructor(rows, cols, numberOfMines, boardEl) {
        this.rows = rows;
        this.cols = cols;
        this.totalMines = numberOfMines;
        this.minesLeft = this.totalMines;
        this.unopenedCells = this.rows * this.cols;

        this.board = Array(this.rows * this.cols).fill(0)

        this.cells = [];

        this.boardEl = boardEl;
        this.gameHolder = document.querySelector('#game-holder');;
    };

    initializeBoard() {
        this.boardEl.innerHTML = '';

        this.cells = [];

        this.board.map((_, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('square-blank');
            cell.dataset.index = index;

            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });
        this.boardEl.style.setProperty('--rows', this.rows);
        this.boardEl.style.setProperty('--cols', this.cols);
    };

    resetGame() {
        this.board = Array(this.rows * this.cols).fill(0)
        this.unopenedCells = this.rows * this.cols;
        this.minesLeft = this.totalMines;
        this.gameHolder.style.backgroundColor = '#504d51';

        for (const cell of this.cells) {
            cell.classList.remove(cell.classList.item(1));
            cell.classList.add('square-blank');
        }

        this.initializeBoard();
    }

}

export default Board;