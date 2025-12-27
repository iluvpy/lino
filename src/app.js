import { BoardState } from "./BoardState.js";
import { BoardRenderer } from "./BoardRenderer.js";
import { Piece } from "./Piece.js";
import { sleep } from "./util.js";
import { BoardHandler } from "./BoardHandler.js";

class LinoApp {
    constructor() {
        this.board = document.querySelector(".board");
        this.bState = new BoardState();
        this.bRenderer = new BoardRenderer();
        this.bHandler = new BoardHandler();

        this.initbStateObserver();
        this.handleBoardState();
    }


    async initbStateObserver() {
        while (1) {
            await sleep(500);
            this.bState.updateState();
        }
    }

    async handleBoardState() {
        while (1) {
            await sleep(200);
            for (let piece of this.bState.boardState) {
                if (piece.co)
                this.bHandler.isInCheck()

            }
        }
    }

}


window.onload = async () => {new LinoApp();}

