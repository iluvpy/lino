// generalized essentially means that a pieces movment can be generalized for example the rook, the queen, the bishop
const PIECE_ATTRIBUTES = {
    p: {
        generalized: false,
        pawn: true
    },
    b: { // bishop
        generalized: true,
        diagonal: true,
        sameColor: true
    },
    q: { // queen
        generalized: true,
        diagonal: true,
        horizontal: true,
        vertical: true,
        sameColor: false
    },
    n: {
        generalized: false,
        knight: true
    },
    r: {
        generalized: true,
        diagonal: false,
        horizontal: true,
        vertical: true
    },
    k: {
        generalized: false,
        king: true
    }
};

class Piece {
    constructor(pieceCode, x, y) {
        this.pieceCode = pieceCode;
        this.white = pieceCode[0] === "w";
        this.
        this.x = x;
        this.y = y;
    }
    

    // returns position in the chess.com square-xy notation 
    getPieceXYClass() {
        return `square-${x+1}${8-y}`;
    }
} 