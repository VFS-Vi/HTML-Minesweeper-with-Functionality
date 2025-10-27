class Logic {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.gameOver = false;
        this.gameStarted = false;
        this.minePositions = new Set();
    }

    populateBoard(addedPositions = new Set()) {
        while (this.minePositions.size < this.gameBoard.minesLeft) {
            const newPosition = this.getRandomInt(this.gameBoard.rows * this.gameBoard.cols);

            if (!addedPositions.has(newPosition)) {
                this.gameBoard.board[newPosition] = -1;
                this.addToNeighbourSquares(newPosition);
                this.minePositions.add(newPosition);
                addedPositions.add(newPosition);
            }
        }
    }

    leftClickSquare(index) {
        if (this.gameOver) return;
        if (!this.gameStarted) {
            this.firstClickSquare(index);
        }
        if (this.gameBoard.board[index] === 0) { // Check if opened 0 square
            this.recursiveOpening(index);
        }
        if (this.gameBoard.cells[index].classList.item(1) !== 'square-flagged') { //Check if square is flagged
            if (this.gameBoard.board[index] === -1) { // Check if square is a MIN   game over
                this.openMine(index)
                return;
            }
            this.openSquare(index) // Open that square
        }
    };

    openSquare(index) {
        const value = this.gameBoard.board[index];
        this.gameBoard.cells[index].classList.remove(this.gameBoard.cells[index].classList.item(1));
        if (value === -1) return; 
        this.gameBoard.cells[index].classList.add(`square-open${value}`);

        this.gameBoard.unopenedCells--
        this.checkWin();
    }

    openMine(index) {
        this.gameOver = true;
        this.minePositions.forEach((e) => {
            this.gameBoard.cells[e].classList.remove(this.gameBoard.cells[e].classList.item(1));
            this.gameBoard.cells[e].classList.add('square-mineRevealed');
        });
        this.gameBoard.cells[index].classList.remove(this.gameBoard.cells[index].classList.item(1));
        this.gameBoard.cells[index].classList.add('square-mineDeath');
    }

    firstClickSquare(index) {
        this.gameStarted = true;
        const excludeFromMines = this.getNeighbours(index);
        excludeFromMines.add(index);
        this.populateBoard(excludeFromMines);
    }

    rightClickSquare(index) {
        if (this.gameOver) return;

        const cell = this.gameBoard.cells[index];
        const current = cell.classList.item(1);
        if (current === 'square-flagged') {
            // Unflag cell
            cell.classList.remove(current);
            cell.classList.add('square-blank');
            this.gameBoard.minesLeft++;
        } else if (current === 'square-blank' && this.gameBoard.minesLeft > 0) {
            // Flag cell
            cell.classList.remove(current);
            cell.classList.add('square-flagged');
            this.gameBoard.minesLeft--;
        }
        
    }

    reset() {
        this.gameOver = false;
        this.gameStarted = false;

        this.gameBoard.resetGame();

        this.minePositions = new Set();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    addToNeighbourSquares(index) {
        const neighbours = this.getNeighbours(index);

        for (const neighbour of neighbours) {
            if (this.gameBoard.board[neighbour] !== -1) {
                this.gameBoard.board[neighbour]++;
            }
        }
    }

    getNeighbours(index) {
        const row = Math.floor(index / this.gameBoard.cols);
        const col = index % this.gameBoard.cols;

        const directions = [
            [-1, -1],   [-1, 0],  [-1, 1],
            [0, -1],              [0, 1],
            [1, -1],    [1, 0],   [1, 1]
        ];

        const neighbours = new Set();

        for (const [dr, dc] of directions) {
            const r = row + dr;
            const c = col + dc;

            if (r >= 0 && r < this.gameBoard.rows && c >= 0 && c < this.gameBoard.cols) {
                neighbours.add(r * this.gameBoard.cols + c);
            }
        }

        return neighbours;
    }

    recursiveOpening(index, visited = new Set()) {
        if (visited.has(index) || this.gameBoard.cells[index].classList.item(1) === 'square-flagged') return;
        visited.add(index);

        if (this.gameBoard.board[index] === 0) {
            const neighbours = this.getNeighbours(index);
            for (const n of neighbours) {
                this.recursiveOpening(n, visited);
            }
        }
        this.openSquare(index);
    }

    checkWin() {
        if (this.gameBoard.totalMines === this.gameBoard.unopenedCells) {
            console.log('YOU WON');
        }
    }
}

export default Logic;