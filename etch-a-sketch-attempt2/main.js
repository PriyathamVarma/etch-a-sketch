// setting the initial board and 
function populateBoard(BoxesInGrid) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${BoxesInGrid}, 1fr)`
    board.style.gridTemplateRows =  `repeat(${BoxesInGrid}, 1fr)`

        for (let i = 0; i < BoxesInGrid * BoxesInGrid; i++) {
            let square = document.createElement("div");
            square.style.backgroundColor = 'black';
            square.addEventListener("mouseover", () => {square.style.backgroundColor = 'white';});
            board.insertAdjacentElement("beforeend", square);
        }
}

function changeBoard(input) {
    populateBoard(input);
}



// adding event listener to set grid size
let gridButton = document.querySelector(".setGridSizeButton");
gridButton.addEventListener("click", setGridSize);

function setGridSize() {
    let requestedGridSize = prompt("What would you like the grid size to be?")
    if (requestedGridSize > 0 && requestedGridSize < 100) {
        changeBoard(requestedGridSize);

    } else {
        alert("Please enter an integer between 0 and 100")
    }
}



populateBoard(16);