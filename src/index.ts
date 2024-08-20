import BoardRenderer from "./BoardRenderer.ts";
import Color from "./Color.ts";
import { getRandomInt } from "./util.ts";

window.onload = () => {
    let find_board = document.querySelector(".board");
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
            } else {
                bRenderer.removeHighlight(lastId);
            }
        })
    }
}

