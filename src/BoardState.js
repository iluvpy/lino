class BoardState {
    constructor() {
        this.boardState = new Array(8);
        for (let i = 0; i < 8; i++) {
            let row = new Array(8);
            this.boardState[i] = row;
        }
    }

    getPieceFromDiv(div) {
        let classList = div.classList;
        if (classList.length > 3) return;

        let pieceCode = undefined;
        let x = undefined;
        let y = undefined;
        for (let cl of classList) {
            if (cl.length == 2) {
                pieceCode = cl;
            }
            else if (cl !== "piece") {
                let coords = cl.split("-")[1];
                x = coords[0] - 1;
                y = 8 - coords[1];
            }
        }

        return new Piece(pieceCode, x, y);
    }

    updateState() {
        let pieces = document.getElementsByClassName("piece");
        for (var pieceDiv of pieces) {
            let piece = this.getPieceFromDiv(pieceDiv);
            if (piece !== undefined) {
                this.boardState[piece.y][piece.x] = piece;
            }

        }
    }
}

