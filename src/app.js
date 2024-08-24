


window.onload = async () => {
    let find_board = document.querySelector(".board");
    let bState = new BoardState();
  
    console.log("Lino is running!!");
    if (find_board !== undefined) {
        let lastId = "";
        let bRenderer = new BoardRenderer();
        window.addEventListener("click", (ev) => {
            console.log(ev);
            console.log("adding highlight!");
            let x = getRandomInt(0, 8);
            let y = getRandomInt(0, 8);
            let color = new Color(114,137,218);
            let id = bRenderer.addHighlight(x, y, color);
            if (lastId === "") {
                lastId = id;
            }
            if (lastId != id){
                bRenderer.removeHighlight(lastId);
                lastId = id;
            }
        })
    }

    while (1) {
        await sleep(100);
        bState.updateState();
    }
}

