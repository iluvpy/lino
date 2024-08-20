

console.log("Lino loaded!");
console.log("change the look of chess.com through the settings!");


var defaultHighlightedSquareDiv = '<div class="highlight square-${sq}" data-test-element="highlight" style="background-color: rgb(235, 97, 80); opacity: 0.8;"></div>'



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

find_board = document.querySelector(".board");
if (find_board !== undefined) {
    window.addEventListener("click", (ev) => {
        let randomN = getRandomInt(11, 88);
        let divCode = defaultHighlightedSquareDiv.replace("${sq}", randomN);
        find_board.insertAdjacentHTML("afterbegin", divCode);
    })
}