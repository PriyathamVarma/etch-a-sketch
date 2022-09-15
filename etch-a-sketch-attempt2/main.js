let numberOfBoxesInGrid = 16;

// setting the initial board and 
let board = document.querySelector(".board")
board.style.gridTemplateColumns = `repeat(${numberOfBoxesInGrid}, 1fr)`
board.style.gridTemplateRows =  `repeat(${numberOfBoxesInGrid}, 1fr)`

for (let i = 0; i < numberOfBoxesInGrid * numberOfBoxesInGrid; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = 'yellow';
    board.insertAdjacentElement("beforeend", square);
}