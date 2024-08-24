
class BoardRenderer {
    constructor() {
        this.board = document.querySelector(".board");
        this.boardFound = this.board !== undefined;
    }

    getHighlightDivHTML(x, y, color, id) {
        let div = DefaultHighlightedSquareDiv.replace(
            DivIDPlaceHolder, id  // replacing placeholder in raw html with id 
        ).replace(
            SqNumPlaceholder, // replacing coordinates
            `${x+1}${y+1}`   
        ).replace(
            HDivColorPlaceholder, // replacing color
            color.getStringRGB()
        )
        return div;
    }

    addHighlight(x, y, color) {
        let id = getRandomHex(5);
        let html = this.getHighlightDivHTML(x, y, color, id);
        if (this.boardFound) {
            this.board.insertAdjacentHTML("afterbegin", html);
        }
        return id;
    }

    removeHighlight(id) {
        try {
            document.getElementById(id).remove();
        } catch {}
    }

}