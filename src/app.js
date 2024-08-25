


class LinoApp {
    constructor() {
        this.board = document.querySelector(".board");
        this.bState = new BoardState();
        this.bRenderer = new BoardRenderer();

        this.initObserver();
    }

    boardMutation(mutation) {
        console.log("board mutated!");
        console.log(mutation);
    }

    initObserver() {
        // Create an observer instance
        const observer = new MutationObserver(mutationsList => {
            for (let mutation of mutationsList) {
                // // Check if nodes were added
                // if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                //     this.boardMutation(mutation)
                // }
                this.boardMutation(mutation);
            }
        });

        // Start observing the target node for configured mutations
        observer.observe(this.board, {
            childList: true, // Listen for child elements being added or removed
              // Observe all child nodes, not just direct children
        });
    }

}


window.onload = async () => {

    let linoApp = new LinoApp();

    // console.log("Lino is running!!");
    // if (find_board !== undefined) {
    //     let lastId = "";
    //     window.addEventListener("click", (ev) => {
    //         console.log(ev);
    //         console.log("adding highlight!");
    //         let x = getRandomInt(0, 8);
    //         let y = getRandomInt(0, 8);
    //         let color = new Color(114,137,218);
    //         let id = bRenderer.addHighlight(x, y, color);
    //         if (lastId === "") {
    //             lastId = id;
    //         }
    //         if (lastId != id){
    //             bRenderer.removeHighlight(lastId);
    //             lastId = id;
    //         }
    //     })
    // }

    // while (1) {
    //     await sleep(100);
    //     bState.updateState();
    // }
}

