
class Piece {
    constructor(pieceCode, position) {
        this.pieceCode = pieceCode;
        this.position = position;
    }


} 


class BoardState {
    constructor() {
        this.boardState = new Array(8);
        for (let i = 0; i < 8; i++) {
            let row = new Array(8);
            this.boardState[i] = row;
        }
    }

    updateState() {
        let pieces = document.getElementsByClassName("piece");
        for (var piece of pieces) {
            let classList = piece.classList;
            if (classList[0].includes("hover")) continue;
            let square = classList[classList.length-1];
            let pieceCode = classList[classList.length-2];
            let squareNumber = square.split("-")[1];
            let squarePos = Array.from(squareNumber).map((v) => Number(v));
            this.boardState[8-squarePos[1]][squarePos[0]] = new Piece(pieceCode, squarePos);

        }
        console.log(this.boardState);
    }
}

