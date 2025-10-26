class UserInput {
    constructor(gameLogic) {
        this.gameLogic = gameLogic;

        this.boundHandlerLeft = this.handleOpen.bind(this);
        this.boundHandlerRight = this.handleFlag.bind(this);

        this.boardEl = document.querySelector('#board');
        this.addEventListeners();
    }

    addEventListeners() {
        this.boardEl?.addEventListener('click', this.boundHandlerLeft);
        this.boardEl?.addEventListener('contextmenu', this.boundHandlerRight);
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
    }
}

export default UserInput;