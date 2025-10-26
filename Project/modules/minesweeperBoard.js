class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.board = Array(this.rows * this.cols).fill('1')// arrays in js are dynamic

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
            cell.classList.add('square-blank');
            cell.dataset.index = index;
            //cell.addEventListener('click', () => this.openSquare(index));
            //cell.addEventListener('contextmenu', () => this.flagSquare(index));

            this.boardEl.appendChild(cell);
            this.cells.push(cell);
        });

        this.resetBtn.addEventListener('click', this.resetGame); /// nothing needs to be passed through
    };

    openSquare = (index) => {
        if (this.cells[index].classList.item(1) !== 'square-flagged') {
            switch (this.board[index]) {
                case 'B':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-blank');
                    break;
                case 'M':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-mineDeath');
                    break;
                case '0':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open0');
                    break;
                case '1':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open1');
                    break;
                case '2':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open2');
                    break;
                case '3':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open3');
                    break;
                case '4':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open4');
                    break;
                case '5':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open5');
                    break;
                case '6':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open6');
                    break;
                case '7':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open7');
                    break;
                case '8':
                    this.cells[index].classList.remove(this.cells[index].classList.item(1));
                    this.cells[index].classList.add('square-open8');
                    break;
            }
        }
    };

    flagSquare = (index) => {
        if (this.cells[index].classList.item(1) === 'square-blank') {
            this.cells[index].classList.remove(this.cells[index].classList.item(1));
            this.cells[index].classList.add('square-flagged');
        }
        else if (this.cells[index].classList.item(1) === 'square-flagged') {
            this.cells[index].classList.remove(this.cells[index].classList.item(1));
            this.cells[index].classList.add('square-blank');
        }
    };

    resetGame = () => {
        this.board = Array(this.rows * this.cols).fill('0')// arrays in js are dynamic

        this.isGameOver = false;

        //this.cells.forEach(cell => cell.textContent = '');
    }

}

export default Board;