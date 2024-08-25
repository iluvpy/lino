


class LinoApp {
    constructor() {
        this.board = document.querySelector(".board");
        this.bState = new BoardState();
        this.bRenderer = new BoardRenderer();

        this.initbStateObserver();
    }


    async initbStateObserver() {
        while (1) {
            await sleep(500);
            this.bState.updateState();
        }
    }

}


window.onload = async () => {new LinoApp();}

